import Link from 'next/link';

const login = () => {
  return (
    <>
      <div className="p-5 flex justify-center items-center flex-col mt-7  ">
        <div className="p-8">
          <h1 className="font-bold text-3xl items-center flex justify-center mb-3">
            Login
          </h1>
          <p className="text-lg font-medium">
            Dont have an account?{' '}
            <Link href="/register">Click here to register</Link>
          </p>
        </div>
        <div>
          <form>
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
      </div>
    </>
  );
};

export default login;
