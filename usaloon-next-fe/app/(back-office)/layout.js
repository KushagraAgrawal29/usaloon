import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <div>
        {/* Header  */}
        <Navbar/>
        {/* <h2>Navbar</h2> */}
      </div>
      <div className="flex">
        {/* Sidebar  */}
        <div className=""><Sidebar/></div>
        <main>{children}</main>
      </div>
    </div>
  );
}
