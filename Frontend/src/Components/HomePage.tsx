"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { AuthStore, ChatStore } from "./types";
import SideBar from "./SideBar";
import NoChatSelected from "./NoChatSelected";
import ChatContainer from "./ChatContainer";
import { useChatStore } from "@/store/useChatStore";

export default function HomePage() {
  const router = useRouter();
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore() as AuthStore;
  const {selectedUser} = useChatStore() as ChatStore;

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log({ authUser });
  if (isCheckingAuth && authUser === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin  w-12 h-12 text-blue-500" />
      </div>
    );
  }
  if (!authUser) {
    router.push("/SignupPage");
  }

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-2 sm:px-4">
        <div className="bg-base-100 p-2 sm:p-4 rounded-lg shadow-md w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full overflow-hidden">
            <div className={`${selectedUser ? 'hidden md:block' : 'block'} h-full`}>
              <SideBar />
            </div>
            <div className={`flex-1 ${selectedUser ? 'block' : 'hidden md:block'} h-full`}>
              {selectedUser ? <ChatContainer /> : <NoChatSelected />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
