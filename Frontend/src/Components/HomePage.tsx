"use client";
import { useAuthStore } from "@/store/useAuthStore";
import React from "react";

const HomePage = () => {
  const { authUser } = useAuthStore();
  return <div>HomePage</div>;
};

export default HomePage;
