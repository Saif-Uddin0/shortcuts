"use client";

import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  UserCog,
  Shield,
  User,
} from "lucide-react";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";

const SidebarLinks = () => {

  const pathname = usePathname();

  const baseClass =
    "relative flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all";

  const getClass = (path) =>
    `${baseClass} ${
      pathname === path
        ? "text-[#00CE51] bg-gradient-to-r border-l-5 from-[#00CE51]/20 to-transparent"
        : "text-gray-400 hover:bg-[#1A1A1A] hover:text-white"
    }`;

  return (
    <div className="flex flex-col h-full">

      {/* Top Menu */}
      <nav className="flex flex-col gap-2 pr-4">

        <Link href="/" className={getClass("/")}>
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link href="/conversation" className={getClass("/conversation")}>
          <MessageSquare size={18} />
          Conversation
        </Link>

        <Link href="/leads" className={getClass("/leads")}>
          <Users size={18} />
          Leads
        </Link>

        <Link href="/agent-manage" className={getClass("/agent-manage")}>
          <UserCog size={18} />
          Agent Manage
        </Link>

        <Link href="/admin-manage" className={getClass("/admin-manage")}>
          <Shield size={18} />
          Admin Manage
        </Link>

      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pb-10">

        <Link href="/profile" className={getClass("/profile")}>
          <User size={18} />
          Profile
        </Link>

        <div className="border-t border-[#1F1F1F] my-4"></div>

        <LogoutButton />

      </div>

    </div>
  );
};

export default SidebarLinks;