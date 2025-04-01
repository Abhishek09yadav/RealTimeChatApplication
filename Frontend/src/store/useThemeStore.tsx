import {create} from "zustand";

const useThemeStore = create((set) =>({
theme: localStorage.getItem("chat-theme") || "light",

setTheme:(theme: string) => {
  set((theme))
  localStorage.setItem("chat-theme",theme);
},
}))

export default useThemeStore;