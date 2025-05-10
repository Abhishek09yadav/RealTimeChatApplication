import React from "react";
import { ChatStore } from "./types";
import { useChatStore } from "@/store/useChatStore";

const ChatContainer = () => {
  const { selectedUser,messages,isMessagesLoading,getMessages,users,selectedUSer } = useChatStore<ChatStore>() ;
  return <div>ChatContainer</div>;
};

export default ChatContainer;
