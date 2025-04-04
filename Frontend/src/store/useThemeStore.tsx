import { create } from "zustand";
import { ThemeStore } from "@/Components/types";

const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'light',
  setTheme: (newTheme) => set({ theme: newTheme }),
}));

export default useThemeStore;
