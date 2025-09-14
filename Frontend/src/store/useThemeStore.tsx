"use client";
import { create } from "zustand";
import { ThemeStore } from "@/Components/types";

const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  setTheme: (newTheme: string | null) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chat-theme", newTheme || "light");
    }
    set({ theme: newTheme });
  },
}));

export default useThemeStore;
