"use client";
import { useAuthStore } from "@/store/useAuthStore";
import React from "react";

const LoginPage = () => {
  const { authUser } = useAuthStore();
  return <div>LoginPage</div>;
};

export default LoginPage;
