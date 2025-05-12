import React from "react";
import { X } from "lucide-react";
import { useChatStore } from "@/store/useChatStore";
import { useAuthStore } from "@/store/useAuthStore";
import Image from "next/image";

const ChatHeader = () => {
  const { selectedUser, closeChat } = useChatStore();
  const { onlineUsers } = useAuthStore();
  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* avtar */}
          <div className="  relative">
            <Image
              src={selectedUser?.profilePic || "/profile.png"}
              alt={"Profile Picture"}
              width={40}
              height={40}
              className="rounded-full object-fit-cover w-10 h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
