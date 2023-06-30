import Credentials from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  provider: [
    Credentials({
      name: 'Credentials',
      async authorize(credentials, req) {
        dbconn().catch((error) => {
          error: 'connection failed';
        });
        //  check if user exists
        const userexists = await Users.findOne({ email: credentials.email });

        if (!userexists) {
          throw new Error('User not found Kindly SignIn');
        }

        //   comparing the password
        const correctPassword = await compare(
          credentials.password,
          userexists.password
        );
        if (!correctPassword || userexists.email !== credentials.email) {
          throw new Error('Invalid email address or password');
        }

        return userexists;
      },
    }),
  ],
});
