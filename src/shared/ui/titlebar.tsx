import { useState } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { X, Minus } from "lucide-react";
import { Button } from "@/shared/ui/button";

export function Titlebar() {
  const [error, setError] = useState<string | null>(null);
  const window = getCurrentWindow();

  const handleMinimize = async () => {
    try {
      await window.minimize();
    } catch (err) {
      setError(
        "Failed to minimize the window. " +
          (err instanceof Error ? err.message : String(err)), // refactor into toaster
      );
    }
  };

  // deprecated
  //   const handleMaximize = async () => {
  //   try {
  //     const isMaximized = await window.isMaximized();
  //     if (isMaximized) {
  //       await window.unmaximize();
  //     } else {
  //       await window.maximize();
  //     }
  //   } catch (err) {
  //     setError(
  //       "Failed to toggle maximize state. " +
  //         (err instanceof Error ? err.message : String(err)) // refactor into toaster
  //     );
  //   }
  // };

  const handleClose = async () => {
    try {
      await window.close();
    } catch (err) {
      setError(
        "Failed to close the window. " +
          (err instanceof Error ? err.message : String(err)), // refactor into toaster
      );
    }
  };

  return (
    <div
      className="flex fixed z-50 items-center justify-end p-4 bg-transparent text-white w-full"
      style={{ ["WebkitAppRegion" as any]: "drag" }}
    >
      <Button variant="ghost" size="icon" onClick={handleMinimize}>
        <Minus className="h-5 w-5" />
      </Button>
      {/*
      deprecated

      <Button
        variant="ghost"
        size="icon"
        onClick={handleMaximize}
      >
        <Square className="h-4 w-4" />
      </Button> */}
      <Button variant="ghost" size="icon" onClick={handleClose}>
        <X className="h-5 w-5" />
      </Button>
      {error && <div>{error}</div>}
    </div>
  );
}
