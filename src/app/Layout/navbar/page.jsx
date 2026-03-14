import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar({ title, avatar, name, role }) {
  return (
    <header className="py-5 border-b border-[#1F1F1F] bg-[#0B0B0B] flex items-center justify-between px-6">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Mobile Sidebar Toggle (client button later) */}
        <button className="md:hidden text-gray-400 hover:text-white transition">
          <Menu size={22} />
        </button>

        {/* Page Title */}
        <h1 className="text-lg md:text-2xl font-semibold text-white">
          {title}
        </h1>

      </div>

      {/* Right User */}

      <div className="flex items-center gap-3">

        <Link href="/profile">
          <img
            src={avatar || "/avatar.png"}
            alt="profile"
            className="w-9 h-9 rounded-full object-cover"
          />
        </Link>

        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-sm font-medium text-white dark:black">
            {name}
          </span>

          <span className="text-xs text-gray-400">
            {role}
          </span>
        </div>

      </div>

    </header>
  );
}