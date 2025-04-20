"use client";
import React from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { AuthStore } from "./types";

const Navbar = () => {
  const { logout, authUser } = useAuthStore() as AuthStore;
  const router = useRouter();
  return (
    <header
      className=" border-b border-base-300  w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="h-16 container mx-auto px-4">
        <div className="flex items-center h-full gap-4 justify-between ">
          {/* logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center ">
              <MessageSquare />
            </div>
            <h1>Chat App</h1>
          </div>
          {/* settings and profile section */}
          <div className="flex flex-row items-center gap-3 cursor-pointer">
            <div className="flex items-center gap-3">
              <div
                className=" btn btn-sm gap-2 transition-colors"
                onClick={() => router.push("/SettingsPage")}
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </div>
            </div>
            {authUser && (
              <>
                <div className="flex items-center bg-accent p-2 rounded-md  gap-1 transition-colors cursor-pointer" onClick ={() => router.push("/ProfilePage")}>
                  <User />
                  <span>{authUser?.fullName || "profile"}</span>
                </div>
                <button onClick={logout} className="cursor-pointer">
                  <LogOut />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
