"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
interface AuthStore {
  authUser: string | null;
  checkAuth: () => void;
  isCheckingAuth: true | false;
}

export default function SignupPage() {
  const router = useRouter();
  const validateForm = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore() as AuthStore;
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",

  });
const {signup,isSigningUp} = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (authUser) {
    router.push("/");

  } 


  return (
  <div className="min-h-screen fleax flex-row ">
  {/* left side */}
    <div>
      
    </div>
{/* right side */}
<div></div>
  </div>)
}
