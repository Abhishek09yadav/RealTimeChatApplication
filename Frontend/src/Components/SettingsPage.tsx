"use client";
import React, { useEffect } from "react";
import { send } from "lucide-react";
import useThemeStore from "@/store/useThemeStore";
import { THEMES } from "../Constants/index";
const Dummy_Messages = [
  {
    id: 1,
    sender: "Alice",
    content: "Hello, how are you?",
    isSent: false,
    timestamp: "2023-10-01T12:00:00Z",
  },
  {
    id: 2,
    sender: "Bob",
    content: "I'm good, thanks! How ",
    isSent: false,
    timestamp: "2023-10-01T12:01:00Z",
  },
];
const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  
  useEffect(()=>{
    const storedTheme = localStorage.getItem("chat-theme");
    setTheme(storedTheme || "light");
  },[setTheme])

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-sm text-base-content/70">
            Select your preferred theme
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {THEMES.map((item: string) => (
            <button
              key={item}
              className={`group flex flex-col
              items-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                theme === item ? "bg-base-200" : "hover:bg-base-200/50"
              }`}
              onClick={() => setTheme(item)}
            >
              <div>
                
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
