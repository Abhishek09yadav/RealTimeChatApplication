import React from "react";
import { useChatStore } from "@/store/useChatStore";
import { useAuthStore } from "@/store/useAuthStore";
import Image from "next/image";
import { X } from "lucide-react";
import { AuthStore, ChatStore } from "../types";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore() as ChatStore;
  const { onlineUsers } = useAuthStore() as AuthStore;
  return (
    <div className="p-2 sm:p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3 flex-1">
          {/* avtar */}
          <div className="flex flex-row items-center gap-2 sm:gap-3 relative flex-1">
            <Image
              src={selectedUser?.profilePic || "/profile.png"}
              alt={"Profile Picture"}
              width={40}
              height={40}
              className="rounded-full object-fit-cover w-8 h-8 sm:w-10 sm:h-10 border-2 border-white shadow-sm"
            />

            {/* <div
              className={`absolute bottom-0 right-0 ${
                onlineUsers?.some((user) => user._id === selectedUser?._id)
                  ? "bg-green-500"
                  : "bg-gray-400"
              } h-2 w-2 rounded-full border-2 border-white`}
            ></div> */}
            {/* User info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm sm:text-base truncate">{selectedUser?.fullName}</h3>
              <p className="text-xs sm:text-sm text-base-content/70">
                {/* {onlineUsers.includes(selectedUser?._id) ? "Online" : "Offline"} */}
                {onlineUsers?.some((user) => user?._id === (selectedUser?._id ?? ''))}
              </p>
            </div>
            {/* close button */}
            <button 
              onClick={() => setSelectedUser(null)}
              className="md:hidden p-2 hover:bg-base-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
