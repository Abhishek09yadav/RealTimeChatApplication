import { useChatStore } from "@/store/useChatStore";
import React, { useEffect, useState } from "react";
import { ChatStore } from "./types";

const SideBar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore() as ChatStore;
  const onlineUsers = [];
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);


  useEffect(() => {
    getUsers();
  }, [getUsers]);
  if (isUsersLoading) {
    return <div>Loading...</div>; 
  }
  return <div>SideBar</div>;
};

export default SideBar;
