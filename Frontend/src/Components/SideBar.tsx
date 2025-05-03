import { useChatStore } from "@/store/useChatStore";
import React, { useEffect, useState } from "react";
import { ChatStore } from "./types";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";

const SideBar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore() as ChatStore;
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const onlineUsers = [];


  useEffect(() => {
    getUsers();
  }, [getUsers]);
   if (!isUsersLoading) return <SidebarSkeleton />;
  return <div>SideBar</div>;
};

export default SideBar;
