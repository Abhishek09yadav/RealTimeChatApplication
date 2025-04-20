"use client";
import { create } from "zustand";
import { ThemeStore } from "@/Components/types";

const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light", // || localStorage.getItem("chat-theme") 
  setTheme: (newTheme: string | null) => {
    localStorage.setItem("chat-theme", newTheme || "light");
    set({ theme: newTheme });
  },
}));

export default useThemeStore;
