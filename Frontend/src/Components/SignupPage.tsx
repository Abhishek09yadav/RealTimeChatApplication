"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { FormEvent, useEffect, useState } from "react";
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
import { axiosInstance } from "@/lib/axios";
interface AuthStore {
  authUser: string | null;
  checkAuth: () => void;
  isCheckingAuth: true | false;
}
interface SignupFormData {
  name: string;
  email: string;
  password: string;
}
export default function SignupPage() {
  const router = useRouter();

  const { authUser, checkAuth, isCheckingAuth } = useAuthStore() as AuthStore;
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<SignupFormData>>({});
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
  });
  const { isSigningUp } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (authUser) {
    router.push("/");
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validateForm = (): boolean => {
    const newErros: Partial<SignupFormData> = {};
    if (!formData.name.trim()) {
      newErros.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErros.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErros.email = "Invalid email";
    }
    if (!formData.password) {
      newErros.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErros.password = "Password must be at least 6 characters long";
    }
    setErrors(newErros);
    return Object.keys(newErros).length === 0;
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Signup Data:", formData);
      axiosInstance
        .post("/auth/signup", formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className=" max-w-md w-full space-y-8">
        <div>
          <h2 className="">Create Your Account</h2>
        </div>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="name">Name </label>
            <input
              name="name"
              type="text"
              required
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
