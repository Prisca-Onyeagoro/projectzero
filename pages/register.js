import { Registervalidate } from '@/validate/validate';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';

const register = () => {
  const Router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      phoneno: '',
      password: '',
      cpassword: '',
    },
    validate: Registervalidate,
    onSubmit,
  });
  async function onSubmit(values) {
    const Options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };
    const res = await fetch(
      'http://localhost:3000/api/auth/signup',
      Options
    ).then((response) => {
      if (!response.ok) {
        return response.json().then((data) => {
          const error = data.message;
          DisplayErrorMessage(error);
        });
      } else {
        Router.push('/');
      }
    });
  }

  function DisplayErrorMessage(error) {
    const element = document.getElementById('error');
    element.textContent = error;
  }
  return (
    <>
      <div className="p-5 flex justify-center items-center flex-col mt-7  ">
        <div className="p-8">
          <h1 className="font-extrabold text-3xl items-center flex justify-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-950">
            Register
          </h1>
          <p className="text-lg font-medium">
            Have an account?{' '}
            <Link href="/login" className="text-red-800">
              Click here to login
            </Link>
          </p>
        </div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid  md:grid-cols-2 sm:grid-cols-2">
              <div className="p-5 flex flex-col">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-5 bg-slate-500 outline-none w-72"
                  {...formik.getFieldProps('name')}
                />
                {formik.errors.name && formik.touched.name ? (
                  <span className="bg-rose-800 p-4 text-lg font-bold">
                    {formik.errors.name}
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className="p-5 flex flex-col">
                <div
                  id="error"
                  className="bg-red-800 text-slate-100 font-extrabold text-lg"
                ></div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="p-5 bg-slate-500 outline-none w-72 border-t-gray-800"
                  {...formik.getFieldProps('email')}
                />
                {formik.errors.email && formik.touched.email ? (
                  <span className="bg-rose-800 p-4 text-slate-100 text-lg font-bold">
                    {formik.errors.email}
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className="p-5 flex flex-col">
                <div
                  id="error"
                  className="bg-red-800 text-slate-100 font-extrabold text-lg"
                ></div>
                <input
                  type="text"
                  placeholder="Enter Your Current Address"
                  className="p-5 bg-slate-500 outline-none w-72 border-t-gray-800"
                  {...formik.getFieldProps('address')}
                />
                {formik.errors.address && formik.touched.address ? (
                  <span className="bg-rose-800 p-4 text-slate-100 text-lg font-bold">
                    {formik.errors.address}
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className="p-5 flex flex-col">
                <div
                  id="error"
                  className="bg-red-800 text-slate-100 font-extrabold text-lg"
                ></div>
                <input
                  type="number"
                  placeholder="Enter Your Phone number"
                  className="p-5 bg-slate-500 outline-none w-72 border-t-gray-800"
                  {...formik.getFieldProps('phoneno')}
                />
                {formik.errors.phoneno && formik.touched.phoneno ? (
                  <span className="bg-rose-800 p-4 text-slate-100 text-lg font-bold">
                    {formik.errors.phoneno}
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
                  {...formik.getFieldProps('password')}
                />
                {formik.errors.password && formik.touched.password ? (
                  <span className="bg-rose-800 p-4 text-lg font-bold">
                    {formik.errors.password}
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className="p-5 flex flex-col">
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="p-5 bg-slate-500 outline-none w-72"
                  {...formik.getFieldProps('cpassword')}
                />
                {formik.errors.cpassword && formik.touched.cpassword ? (
                  <span className="bg-rose-800 p-4 text-lg font-bold">
                    {formik.errors.cpassword}
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="flex  items-center justify-center  p-5 ">
              <button
                type="submit"
                className="items-center flex justify-between font-extrabold text-4xl"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default register;
