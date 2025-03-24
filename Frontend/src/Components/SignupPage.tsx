"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { signup, isSigningUp } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (authUser) {
    router.push("/");
  }

  return (
    <div className="min-h-screen flex  flex-col lg:flex-row">
      {/* left screen */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12w-full lg:w-1/2">
        {/* Logo */}
        <div className="text-center mb-8"></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <div className="relative">
            <div className="abolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="size-5 text-base-content/40" />
            </div>
            <input
              type="text"
              className="input input-bordered w-full pl-10"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <div className="absolute"></div>
        </div>
      </form>
      {/* right screen */}
    </div>
  );
}
