import React from "react";
import { BackgroundBeams } from "@/shared/ui";

interface BackgroundLayoutProps {
  children: React.ReactNode;
}

export function BackgroundLayout({ children }: BackgroundLayoutProps) {
  return (
    <div className="relative bg-foreground min-h-screen w-full overflow-hidden">
      <BackgroundBeams className="z-0" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
