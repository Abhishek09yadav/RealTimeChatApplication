import React, { useEffect } from "react";
import { ChatStore } from "./types";
import { useChatStore } from "@/store/useChatStore";
import ChatHeader from "./skeletons/ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";


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
      <div className="flex flex-col overflow-auto items-center justify-center h-full">
        <ChatHeader/>
        <MessageSkeleton/>
        <MessageInput/>
      </div>
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
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message._id} className={`chat`}>
          </div>
        ))}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
