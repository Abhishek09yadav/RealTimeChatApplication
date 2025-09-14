import React from "react";
import {  MessageSquareText } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex-1 flex-col flex items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* icon display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce p-2 ">
              <MessageSquareText className="w-full h-full text-primary" />
            </div>
          </div>
        </div>
        {/* text */}
        <h2>Select a chat to start messaging</h2>
        <p className="text-sm text-base-content/70">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
