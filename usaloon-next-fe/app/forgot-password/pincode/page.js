"use client";

import Image from "next/image";
import { useState } from "react";
import OtpInput from "react-otp-input";

export default function Page() {
  const [otp, setOtp] = useState("");
  return (
    <div className="h-screen w-screen bg-[#63048F]">
      <div className="pt-[65px] pl-[60px] ">
        <h1 className="font-bold  text-[#FFFFFF] text-4xl">
          BeUSalon: Partner
        </h1>
      </div>
      <div className="w-11/12 mx-auto h-[570px] rounded-xl mt-[35px] bg-[#fff] flex">
        <div className="mx-[120px] mt-[60px]">
          <Image
            src="/assets/amico.png"
            alt="login page photo"
            height={500}
            width={500}
            className="object-contain"
          />
        </div>
        <div className="mx-[120px] mt-[100px] w-[400px] ">
          <div className="flex flex-col">
            <h2 className="font-bold text-[#63048F] text-3xl">
              Check Your Email
            </h2>
            <p className="text-lg text-gray-400 my-4">
              A verification code has been sent to your email. Enter the code
              below
            </p>
          </div>

          <div>
            <form>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => {
                  <input
                    {...props}
                    placeholder="-"
                    style={{}}
                    className="w-[48px] rounded-lg border-0 aspext-square bg-[#000000] text-white text-center focus:border-0 focus:outline-2 focus:outline-yellow-50 shadow-[0_1px_0_rgba(255,255,255,0.3)]"
                  />
                }}
                containerStyle={{
                    justifyContent:"space-between",
                    gap: "0 6px"
                }}
              />
            </form>
          </div>

          <button
            type="button"
            className="rounded-lg inline-block bg-[#63048F] p-3 mt-6 w-full text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
