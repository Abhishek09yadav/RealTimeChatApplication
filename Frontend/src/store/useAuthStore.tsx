import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-hot-toast";
import { AxiosErrorResponse } from "@/Components/types";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res?.data });
    } catch (error) {
      set({ authUser: null });
      console.log("error in checking auth", error);
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  login: async (formData: { email: string; password: string }) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", formData);
      set({ authUser: res?.data });
      toast.success("Logged in successfully");
      return res?.data;
    } catch (error) {
      console.log("Login error:", error);
      throw error;
    } finally {
      set({ isLoggingIn: false });
    }
  },
  signup: async (formData: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", formData);
      set({ authUser: res?.data });
      return res?.data;
    } catch (error) {
      console.log("Signup error:", error);
      throw error;
    } finally {
      set({ isSigningUp: false });
    }
  },
  logout: async () => {
    try {
      await axiosInstance.get("/auth/logout");
      set({ authUser: null });
      toast.success("Logout successful");
    } catch (e) {
      const err = e as AxiosErrorResponse;
      toast.error(err?.response?.data?.message || "logout error");
    }
  },
  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/updateProfile", data);
      set({ authUser: res.data });
      toast.success("profile image updated successfully");
    } catch (e) {
      console.log("error in updating profile", e);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
