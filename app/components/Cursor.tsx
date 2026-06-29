"use client";

import { useEffect, useState } from "react";


export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const el = document.elementFromPoint(e.clientX, e.clientY);

      if (
        el &&
        el.closest(
          "a, button, textarea, h1, h2, h3, h4, p, li"
        )
      ) {
        setHovering(true);
      } else {
        setHovering(false);
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
        z-[99999]
        rounded-full
        mix-difference
        bg-cyan-300/45
        transition-[width,height,background,box-shadow]
        duration-280
        ease-out
      "
      style={{
        left: pos.x,
        top: pos.y,
        width: hovering ? 56 : 20,
        height: hovering ? 56 : 20,
        transform: "translate(-50%, -50%)",
        boxShadow: hovering
          ? "rgba(255,255,255,0.85)"
  : "rgba(34,211,238,0.95)",
      }}
    />
  );
}