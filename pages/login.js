import { Loginvalidate } from '@/validate/validate';
import { signIn } from 'next-auth';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const login = () => {
  const Router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: Loginvalidate,
    onSubmit,
  });
  function onSubmit(values) {
    const status = signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/',
    });
    if (status.error !== null) {
      const errormes = status.error;
      DisplayError(errormes);
    }
    if (status.ok) Router.push(status.url);
  }

  function DisplayError(errormes) {
    const errormessage = document.getElementById('error');
    errormessage.textContent = errormes;
  }
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
        <div id="error" className="text-red-800"></div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="p-5 flex flex-col">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-5 bg-slate-500 outline-none w-72 border-t-gray-800"
              />
              {formik.errors.email && formik.touched.email ? (
                <span className="bg-rose-800 p-4 text-lg font-bold">
                  {formik.errors.email}
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="p-5 flex flex-col">
              <input
                type="password"
                placeholder="Enter your password"
                className="p-5 bg-slate-500 outline-none w-72"
              />

              {formik.errors.password && formik.touched.password ? (
                <span className="bg-rose-800 p-4 text-lg font-bold">
                  {formik.errors.password}
                </span>
              ) : (
                <></>
              )}
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
        <div className=" mt-5 flex justify-center  p-5 ">
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
        <div className="flex justify-center">
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
