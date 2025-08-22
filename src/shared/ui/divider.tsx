import React, { useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";

interface DividerProps {
  children?: React.ReactNode;
  className?: string;
}

export function Divider({ children, className }: DividerProps) {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const countChars = (node: React.ReactNode): number => {
      if (typeof node === "string") return node.length;
      if (Array.isArray(node))
        return node.map(countChars).reduce((a, b) => a + b, 0);
      if (React.isValidElement(node)) return countChars(node.props.children);
      return 0;
    };

    setCharCount(countChars(children));
  }, [children]);

  const avgCharWidth = 14;
  const cutoutWidth = Math.min(charCount * avgCharWidth, 200); // max width to avoid overflow

  return (
    <div
      className={cn(
        "my-8 w-full relative flex items-center justify-center",
        className,
      )}
    >
      <div
        className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"
        style={{
          clipPath: children
            ? `polygon(
                0 0,
                calc(50% - ${cutoutWidth / 2 + 5}px) 0,
                calc(50% - ${cutoutWidth / 2 + 5}px) 100%,
                calc(50% + ${cutoutWidth / 2 + 5}px) 100%,
                calc(50% + ${cutoutWidth / 2 + 5}px) 0,
                100% 0,
                100% 100%,
                0 100%
              )`
            : undefined,
        }}
      />
      {children && (
        <span className="relative z-10 mx-4 px-2 text-sm text-accent whitespace-nowrap ">
          {children}
        </span>
      )}
    </div>
  );
}
