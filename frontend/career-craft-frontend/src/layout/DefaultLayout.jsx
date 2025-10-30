import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DefaultLayout({ children, adminOnly=false }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar adminOnly={adminOnly} />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
