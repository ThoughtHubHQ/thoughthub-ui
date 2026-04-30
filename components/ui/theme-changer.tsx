"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./button";

export function ThemeDropdown() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#62748E] transition-all dark:text-[#A1A1AA] dark:hover:bg-[#18181B] outline-none focus-visible:ring-2 focus-visible:ring-[#C04A23] cursor-pointer">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        side="top"
        className="w-32 rounded-xl border-[#E4E4E7] bg-[#e7eacd] p-1 shadow-lg dark:border-[#27272A] dark:bg-[#141417]"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer rounded-lg px-2 py-1.5 text-[14px] font-medium text-[#1D293D] hover:bg-[#F8F9FA] dark:text-white dark:hover:bg-[#18181B] outline-none"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer rounded-lg px-2 py-1.5 text-[14px] font-medium text-[#1D293D] hover:bg-[#F8F9FA] dark:text-white dark:hover:bg-[#18181B] outline-none"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer rounded-lg px-2 py-1.5 text-[14px] font-medium text-[#1D293D] hover:bg-[#F8F9FA] dark:text-white dark:hover:bg-[#18181B] outline-none"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#62748E] transition-all dark:text-[#A1A1AA] hover:bg-transparent dark:hover:bg-[#18181B] outline-none focus-visible:ring-2 focus-visible:ring-[#C04A23] cursor-pointer"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
