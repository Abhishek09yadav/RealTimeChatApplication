"use client";

import { useEffect } from "react";
import useThemeStore from "@/store/useThemeStore";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme || "coffee");
    }
  }, [theme]);

  return <>{children}</>;
};

export default ThemeWrapper;
