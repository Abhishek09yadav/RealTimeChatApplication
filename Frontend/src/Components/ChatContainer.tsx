import React, { useEffect } from "react";
import { ChatStore } from "./types";
import { useChatStore } from "@/store/useChatStore";
import ChatHeader from "./skeletons/ChatHeader";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";

const ChatContainer = () => {
  const { selectedUser, messages, isMessagesLoading, getMessages } =
    useChatStore();

  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser?._id);
    }
  }, [selectedUser, getMessages]);
  if (isMessagesLoading)
    return (
      <div className="flex items-center justify-center h-full">Loading...</div>
    );
  if (!selectedUser)
    return (
      <div className="flex items-center justify-center h-full">
        No user selected
      </div>
    );
  return (
    <div className="flex flex-col overflow-auto">
      <ChatHeader />
      {/* <p>messages .... </p> */}
      <MessageContainer  />
      <MessageInput/>
    </div>
  );
};

export default ChatContainer;
