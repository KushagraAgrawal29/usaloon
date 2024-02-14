"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";

const ResetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, "Too short, Password should not be less than 8 digits")
    .required("Required"),
  confirmPassword: Yup.string()
    .min(8, "Too short, Password should not be less than 8 digits")
    .required("Required"),
});

export default function Page() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: ResetPasswordSchema, // Corrected: validationSchema instead of directly inside Formik component
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
                Reset Password
              </p>
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-gray-700 font-bold mt-2"
                ></label>
                <div className="relative">
                  <input
                    id="newPassword"
                    name="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Enter New Password"
                    onChange={formik.handleChange}
                    value={formik.values.newPassword}
                    className="mt-2 appearance-none border-b-2 rounded md:w-[400px] w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-[#63048F]"
                  />
                  {formik.errors.newPassword && formik.touched.newPassword && (
                    <div className="text-red-200">
                      {formik.errors.newPassword}
                    </div>
                  )}
                  <span
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    className="absolute md:right-7 md:mr-[220px] right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
                  >
                    {showNewPassword ? (
                      <AiOutlineEyeInvisible fontSize={24} fill="#708090" />
                    ) : (
                      <AiOutlineEye fontSize={24} fill="#708090" />
                    )}
                  </span>
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 font-bold mt-2"
                >
                  {/* Password */}
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Enter Confirm Password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    className="mt-2 appearance-none border-b-2 rounded md:w-[400px] w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-[#63048F]"
                  />
                  <span
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute md:right-7 md:mr-[220px] right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEyeInvisible fontSize={24} fill="#708090" />
                    ) : (
                      <AiOutlineEye fontSize={24} fill="#708090" />
                    )}
                  </span>
                </div>
                {formik.errors.confirmPassword &&
                  formik.touched.confirmPassword && (
                    <div className="text-red-200">
                      {formik.errors.confirmPassword}
                    </div>
                  )}
              </div>
              <div>
                <button
                  type="submit"
                  className="rounded-lg bg-[#63048F] text-white py-3 md:mt-[50px] mt-[20px] md:w-[400px] w-full"
                >
                  Submit
                </button>
              </div>
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
