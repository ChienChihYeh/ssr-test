"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { changeTheme } from "@/utils/helper";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (document.querySelector("html")?.getAttribute("data-theme") === "dark") {
      setDark(true);
    }
  }, []);

  console.log("theme load");

  return (
    <button
      className="text-secondary bg-primary py-1 px-2 rounded mt-2"
      onClick={() => {
        if (
          document.querySelector("html")?.getAttribute("data-theme") === "dark"
        ) {
          changeTheme(false);
        } else {
          changeTheme(true);
        }

        setDark((prev) => !prev);
      }}
    >
      {dark ? "Light" : "Dark"} Mode
    </button>
  );
}
