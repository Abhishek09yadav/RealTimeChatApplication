"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useReducer } from "react";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { Camera, Mail, User } from "lucide-react";
import Image from "next/image";
interface AuthStore {
  authUser: string | null;
  checkAuth: () => void;
  isCheckingAuth: true | false;
}

export default function ProfilePage() {
  const router = useRouter();
  const {
    authUser,
    checkAuth,
    isupdatingProfile,
    updateProfile,
    isCheckingAuth,
  } = useAuthStore() as AuthStore;
  useEffect(() => {
    checkAuth();
  }, []);
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
    <div className="h-screen pt-20">
      <div className="max-w-2xl mx-auto  py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8 ">
          <h1 className="text-3xl text-center font-semibold"> Profile</h1>
          <p className="mt-2 text-center">Your profile information</p>
        </div>
        {/* avtar && the upload section */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <Image
              alt="profile img"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
            <label htmlFor="avatar-upload"
            className={
              
              `abolute bottom-0 right-0 bg-base-content`
            }
            
            >wewe</label>
          </div>
        </div>
      </div>
    </div>
  );
}
