"use client";

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <section className="custom-scrollbar  sticky left-0 top-0 z-20 flex h-[686px] w-fit flex-col justify-between overflow-auto border-r border-r-black  bg-white pb-5 pt-14 max-md:hidden">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathName.includes(link.route) && link.route.length > 1) ||
            pathName === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`relative flex justify-start gap-4 rounded-lg p-4 ${
                isActive && "bg-primary-500"
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
                className=""
              />
              <p className="text-black max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-6 px-6">
        <button signOutCallback={()=>router.push("/login")}>
        <div className="flex cursor-pointer">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />

                <p className="text-black max-lg:hidden gap-4 pl-4">Logout</p>
            </div>
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
