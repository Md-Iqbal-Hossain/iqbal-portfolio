"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2.5 rounded-full glass-card hover:bg-white/10 text-gray-300 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 flex items-center justify-center cursor-pointer"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform hover:scale-110" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600 transition-transform hover:scale-110" />
      )}
    </button>
  );
}
