import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  UserCog,
  Shield,
  User,
} from "lucide-react";
import LogoutButton from "../components/LogoutButton";

export default function Sidebar() {
  const linkClass =
    "relative flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all text-gray-400 hover:bg-[#1A1A1A] hover:text-white";

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] border-r border-[#1F1F1F] w-[280px]">

      {/* Logo */}
      <Link href="/" className="flex flex-col items-center py-5">
        <div className="flex items-center gap-2 text-white text-lg font-semibold">
          <img src="/logo.png" className="w-8 h-8" alt="logo"/>
          <h1 className="text-3xl font-semibold">LoGo</h1>
        </div>
      </Link>

      <div className="border-t border-[#1F1F1F] mb-6"></div>

      <nav className="flex flex-col gap-2 pr-4">

        <Link href="/" className={linkClass}>
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link href="/conversation" className={linkClass}>
          <MessageSquare size={18} />
          Conversation
        </Link>

        <Link href="/leads" className={linkClass}>
          <Users size={18} />
          Leads
        </Link>

        <Link href="/agent-manage" className={linkClass}>
          <UserCog size={18} />
          Agent Manage
        </Link>

        <Link href="/admin-manage" className={linkClass}>
          <Shield size={18} />
          Admin Manage
        </Link>

      </nav>

      <div className="mt-auto pb-10">

        <Link href="/profile" className={linkClass}>
          <User size={18} />
          Profile
        </Link>

        <div className="border-t border-[#1F1F1F] my-4"></div>

        <LogoutButton />

      </div>

    </div>
  );
}