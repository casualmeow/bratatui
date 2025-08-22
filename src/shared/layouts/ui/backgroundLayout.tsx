import React from "react";
import { BackgroundBeams, Titlebar } from "@/shared/ui";
import { Toaster } from "@/shared/ui/sonner";

interface BackgroundLayoutProps {
  children: React.ReactNode;
}

export function BackgroundLayout({ children }: BackgroundLayoutProps) {
  return (
    <div className="relative bg-foreground min-h-screen w-full overflow-hidden">
      <Titlebar />
      <BackgroundBeams className="z-0" />
      <div className="relative z-10">{children}</div>
      <Toaster position="top-center" />
    </div>
  );
}
