"use client";
import { useChatStore } from "@/store/useChatStore";
import React, { useEffect, useState } from "react";
import { ChatStore } from "./types";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const SideBar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore() as ChatStore;
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const onlineUsers = [];

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-300 ">
      {/* header */}
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
      </div>
      <div className="mt-3  lg:flex items-center gap-2">

        <label className="cursor-pointer flex items-center gap-2" >
          <input
          type="checkbox"
          checked={showOnlineOnly}
          onChange={(e) => setShowOnlineOnly(e.target.checked)}
          className="checkbox checkbox-sm border-base-300 bg-secondary"
          />
          <span>filter online users</span>
        </label>
      </div>
      {/* skeleton contacts */}
      <div className="overflow-y-scroll w-full py-3">
        {users.map((_, index) => (
          <div key={index} className="w-full p-3 flex items-center gap-3">
            {/* avtar */}
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-12 rounded-full" />
            </div>
            {/* user info for lg screen */}
            <div className="hidden lg:block text-left min-w-0 flex-col ">
              <div className="skeleton h-4 w-32 mb-2" />
              <div className="skeleton h-3 w-16" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
