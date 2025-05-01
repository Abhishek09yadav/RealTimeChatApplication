"use client";
import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "@/lib/axios";
import { AxiosErrorResponse, ChatStore } from "@/Components/types";
export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUserLoading: false,
  isMessagesLoading: false,
  setSelectedUser: (userId) => set({ selectedUser: userId }),

  getUsers: async () => {
    set({ isUserLoading: true });
    try {
      const res = await axiosInstance.get("/message/users");
      set({ users: res.data });
    } catch (error) {
      const err = error as AxiosErrorResponse;
      toast.error(err?.response?.data?.message || "Something went wrong") ;
    } finally {
      set({ isUserLoading: false });
    }
  },
  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    axiosInstance
      .get(`/message/${userId}`)
      .then()
      .catch((e) => {
        console.log(e);
        toast.error("Error fetching messages", {
          position: "bottom-center",
        });
      })
      .finally(() => {
        set({ isMessagesLoading: false });
      });
  },
}));
