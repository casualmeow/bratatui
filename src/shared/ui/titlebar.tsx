import { useState } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";

export function Titlebar() {
  const [error, setError] = useState<string | null>(null);
  const window = getCurrentWindow();

  const handleClose = async () => {
    try {
      await window.close(); // works if it's NOT the primary window
    } catch (err) {
      setError(
        "Failed to close the window. " +
          (err instanceof Error ? err.message : String(err))
      );
    }
  };

  return (
    <div className="flex fixed items-center justify-between p-4 bg-gray-800 text-white w-full -webkit-app-region: drag">
      <span className="select-none">My App</span>
      <button
        onClick={handleClose}
        className="no-drag text-red-500 hover:text-red-700"
      >
        Close
      </button>
      {error && <div>{error}</div>}
    </div>
  );
}
