"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const el = document.elementFromPoint(e.clientX, e.clientY);

      if (
        el &&
        el.closest(
          "a, button, input, textarea, select, img, section, div, h1, h2, h3, h4, p, li"
        )
      ) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("mousemove", move);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        z-[1]
        rounded-full
        bg-cyan-300/45
        transition-all
        duration-200
        ease-out
      "
      style={{
        left: pos.x,
        top: pos.y,
        width: active ? 56 : 9,
        height: active ? 56 : 9,
        transform: "translate(-50%, -50%)",
        boxShadow: active
          ? "0 0 45px rgba(34,211,238,0.75)"
          : "0 0 14px rgba(34,211,238,0.9)",
      }}
    />
  );
}