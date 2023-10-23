"use client";

import { useState, useEffect } from "react";
import { changeTheme } from "@/utils/helper";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    document.querySelector("html")?.getAttribute("data-theme") === "dark"
  );

  useEffect(() => {
    changeTheme(dark);
  }, [dark]);

  console.log("theme load");

  return (
    <button
      className="text-secondary bg-primary py-1 px-2 rounded mt-2"
      onClick={() => {
        setDark((prev) => !prev);
      }}
    >
      {dark ? "Light" : "Dark"} Mode
    </button>
  );
}
