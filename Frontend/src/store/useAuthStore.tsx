import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";
export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isupdatingProfile: false,
  isCheckingAuth: true,
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
      console.log("logout error", e?.response);
      toast.error(e.response?.message);
    }
  },
  updateProfile:async(data) =>{
    
  }
}));
