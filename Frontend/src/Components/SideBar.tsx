"use client";
import { useChatStore } from "@/store/useChatStore";
import React, { useEffect, useState } from "react";
import { ChatStore } from "./types";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";
import "./HideScrollBar.css";
import Image from "next/image";
const SideBar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore() as ChatStore;
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const onlineUsers = ["abhil", "abhi2", "abhi3", "abhi4", "abhi5"];

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

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
      <div className="mt-3 hidden lg:flex flex-col items-center gap-2">
        <label className="cursor-pointer flex items-center gap-2">
          <input
            type="checkbox"
            checked={showOnlineOnly}
            onChange={(e) => setShowOnlineOnly(e.target.checked)}
            className="checkbox checkbox-sm bg-secondary"
          />
          <span>filter online users</span>
        </label>
        <p className="text-xs text-zinc-500">
          {onlineUsers?.length} users online
        </p>
      </div>
      {/*  contacts */}
      <div className="overflow-y-scroll scrollbar-hide w-full py-3">
        {filteredUsers.map((user) => (
          <button
            onClick={() => setSelectedUser(user)}
            key={user._id}
            className={`w-full p-3 flex items-center gap-3 hover:bg-base-200 transition-colors ${
              selectedUser?._id === user._id
                ? "bg-base-200 ring-1 ring-base-300 rounded-md"
                : ""
            }`}
          >
            <div className="relative mx-auto lg:mx-0 ">
              <Image
                src={user?.profilePic || "/profile.png"}
                alt="profile"
                className="rounded-full w-10 h-10 "
                width={40}
                height={40}
              />
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-zinc-900 " />
              )}
            </div>
            {/* User info */}

            <div className="flex flex-col">
              <div className="font-medium text-sm text-zinc-400 ">
                {user?.fullName}
              </div>

              <div className="hidden lg:flex text-left min-w-0  flex-col">
                <span className="font-medium text-sm text-zinc-400 ">
                  {onlineUsers.includes(user?._id) ? "online" : "offline"}
                </span>
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <span className="text-sm text-zinc-500 py-4 text-center">
            No users online
          </span>
        )}
      </div>
    </aside>
  );
};

export default SideBar;
