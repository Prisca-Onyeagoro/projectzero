import Image from 'next/image';
import Link from 'next/link';

const login = () => {
  function handleSubmit(e) {}
  return (
    <>
      <div className="p-5 flex justify-center items-center flex-col mt-7  ">
        <div className="p-8">
          <h1 className="font-extrabold text-3xl items-center flex justify-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-950">
            Login
          </h1>
          <p className="text-lg font-medium">
            Dont have an account?{' '}
            <Link href="/register" className="text-red-800">
              Click here to register
            </Link>
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="p-5">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-5 bg-slate-500 outline-none w-72 border-t-gray-800"
              />
            </div>
            <div className="p-5">
              <input
                type="password"
                placeholder="Enter your password"
                className="p-5 bg-slate-500 outline-none w-72"
              />
            </div>
            <div className="flex justify-center bg-gradient-to-r from-slate-800 to-slate-950 p-5 ">
              <button
                type="submit"
                className="items-center font-extrabold text-2xl"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className=" mt-5 flex justify-center bg-gradient-to-r from-slate-800 to-slate-950 p-5 ">
          <button
            type="submit"
            className="items-center font-extrabold text-2xl"
          >
            Signin With Google
          </button>
          <Image
            src="/assets/google.svg"
            alt={'google icon'}
            width={25}
            height={25}
          />
        </div>
        <div className=" mt-5 flex justify-center bg-gradient-to-r from-slate-800 to-slate-950 p-5 ">
          <button
            type="submit"
            className="items-center font-extrabold text-2xl"
          >
            Signin With Github
          </button>
          <Image
            src="/assets/github-octocat.svg"
            alt={'google icon'}
            width={29}
            height={29}
          />
        </div>
      </div>
    </>
  );
};

export default login;
