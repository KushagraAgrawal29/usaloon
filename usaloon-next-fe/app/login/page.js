"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Formik, useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too short, Password should not be less than 8 digits")
    .required("Required"),
});

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema, // Corrected: validationSchema instead of directly inside Formik component
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
              <p className="font-bold text-[#63048F] text-3xl mt-20 ml-2">
                Login to Partner - Admin
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
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="mt-2 appearance-none border-b-2 rounded md:w-[400px] w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-[#63048F]"
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="text-red-500">{formik.errors.email}</div>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mt-2"
                >
                  {/* Password */}
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="mt-2 appearance-none border-b-2 rounded md:w-[400px] w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-[#63048F]"
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute md:right-7 md:mr-[220px] right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible fontSize={24} fill="#708090" />
                    ) : (
                      <AiOutlineEye fontSize={24} fill="#708090" />
                    )}
                  </span>
                </div>
                {formik.errors.password && formik.touched.password && (
                  <div className="text-red-500">{formik.errors.password}</div>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="checkbox" type="checkbox" className="mr-2" />
                  <label
                    htmlFor="checkbox"
                    className="text-gray-500 font-medium text-sm"
                  >
                    Remember Me
                  </label>
                </div>
                <p className="text-gray-500 font-normal text-sm md:mr-[240px]">
                  <Link href={"/forgot-password"}>Forgot Password</Link>
                </p>
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
