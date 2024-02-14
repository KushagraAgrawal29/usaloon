"use client";

import Image from "next/image";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function Page() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="min-h-screen bg-[#63048F] pt-8 sm:pt-[3rem]">
      <h1 className="font-bold text-white text-4xl mb-8 ml-1 sm:ml-[3rem]">
        BeUSalon: Partner
      </h1>
      <div className=" flex flex-col justify-center items-center">
        <div className="w-full max-w-[90rem] bg-white rounded-xl p-8 flex flex-col md:flex-row">
          <div className="flex-1 md:mr-12">
            <div className="hidden md:block md:ml-12">
              <Image
                src="/assets/amico.png"
                alt="login page photo"
                height={500}
                width={500}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex-1 md:ml-12">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <p className="font-bold text-[#63048F] text-3xl flex flex-col mt-20">
                Forgot Password
              </p>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mt-2"
                >
                  {/* Email */}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter the registered email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="mt-2 appearance-none border-b-2 rounded md:w-[400px] w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-[#63048F]"
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="text-red-200">{formik.errors.email}</div>
                )}
              </div>
              <button
                type="submit"
                
                className="rounded-lg bg-[#63048F] text-white py-3 mt-6 md:w-[400px] w-full"
              >
                Login
              </button>
            </form>
          </div>
          <div className="md:hidden mt-8">
            <Image
              src="/assets/amico.png"
              alt="login page photo"
              height={250}
              width={250}
              className="object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
