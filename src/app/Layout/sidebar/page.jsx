import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import SidebarLinks from "./SidebarLinks";
import { User } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] border-r border-[#1F1F1F] w-[280px]">

      {/* Logo */}
      <Link href="/" className="flex flex-col items-center py-5">
        <div className="flex items-center gap-2 text-white text-lg font-semibold">
          <img src="/logo.png" className="w-8 h-8" alt="logo" />
          <h1 className="text-3xl font-semibold">LoGo</h1>
        </div>
      </Link>

      <div className="border-t border-[#1F1F1F] mb-6"></div>

      {/* Client component */}
      <SidebarLinks />

      
    </div>
  );
}