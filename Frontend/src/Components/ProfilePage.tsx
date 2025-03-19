"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useReducer } from "react";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
interface AuthStore {
  authUser: string | null;
  checkAuth: () => void;
  isCheckingAuth: true | false;
}

export default function ProfilePage() {
  const router = useRouter();
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore() as AuthStore;
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
  return <></>;
}
