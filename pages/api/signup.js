import Users from '@/Database/Schema/UserSchema';
import dbconn from '@/Database/dbconn';
import { hash } from 'bcryptjs';

export default async function Signup(req, res) {
  dbconn().catch((error) =>
    res.status(500).json({ error: 'connection failed' })
  );

  if (req.method === 'POST') {
    if (!req.body) {
      return res.status(400).json({ message: 'Missing field' });
    }
    const { name, email, address, phoneno, password } = req.body;
    // check if the user exits using his email
    const userexists = await Users.findOne({ email });
    if (userexists) {
      return res.status(400).json({ message: 'User already exist' });
    }
    const createuser = await Users.create({
      name,
      email,
      address,
      phoneno,
      password: await hash(password, 10),
    });
    return res.status(201).json({ createuser });
  } else {
    res.status(404).json({ message: 'Bad http request' });
  }
}
