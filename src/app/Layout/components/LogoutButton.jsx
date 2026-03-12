"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "../pages/Provider/AuthProvider";

export default function LogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast("Logout Successfully!");
    router.push("/auth/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-3 text-red-400 hover:text-red-500 text-sm transition px-5"
    >
      <LogOut size={18} />
      Logout
    </button>
  );
}