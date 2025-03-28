"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { Camera, Mail, User } from "lucide-react";
import Image from "next/image";
import { AuthStore } from "./types";

export default function ProfilePage() {
  const [selectedImg, setSelectedImg] = useState(null);
 
  const router = useRouter();

  const {
    authUser,
    checkAuth,
    isUpdatingProfile,
    updateProfile,
    isCheckingAuth,
  } = useAuthStore() as AuthStore;


  const handleImageUpload =  (e:any) => {
    console.log('hi')
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = async () =>{
      console.log("updating image ")
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      console.log("Base64 image:", base64Image);
      updateProfile({profilePic: base64Image})
    }
    // setPreview(URL.createObjectURL(file));
  };

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
    <div className="h-screen pt-20 ">
      <div className="max-w-2xl mx-auto  py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8 ">
          <div className="text-center">
          <h1 className="text-2xl text-center font-semibold"> Profile</h1>
          <p className="mt-2 text-center">Your profile information</p>
          </div>
         
        {/* avtar && the upload section */}
        <div className="flex flex-col items-center gap-4 ">
          <div className="relative">
            <Image
              width={100}
              height={100}
              src={ selectedImg || authUser?.profilePic  || "/profile.jpg"}
              alt="Profile"
              className="size-32 rounded-full object-cover border-4"
            />
             <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                `}
              >
              <Camera className="w-5 h-5 text-base-200" />
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUpdatingProfile}
       
              />
            </label>
          </div>
            <p className="text-sm text-zinc-400">
              {isUpdatingProfile
                ? "uploading..."
                : "Click the camera icon to update your photo"}
            </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-1.5">
            <div className="text-sm text-zinc-400 flex items-center gap-2 ">
              <User className="w-4 h-4" />
              Full Name
            </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser && authUser.fullName}</p>
          </div>
          <div className="space-y-1.5">
            <div className="text-sm text-zinc-400 flex items-center gap-2 ">
              <Mail className="w-4 h-4" />
              Email Address
            </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser && authUser.email}</p>
          </div>
        </div>
        <div className="mt-6 bg-base-300 rounded-xl p-6">
          <h2 className="text-lg font-medium mb-4">Account Information</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-zinc-700">
              <span>Member Since</span>
              <span>{authUser && authUser?.createdAt.split("T")[0]}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-zinc-700">
              <span>Account Status</span>

              <span className="text-green-500">Active</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
