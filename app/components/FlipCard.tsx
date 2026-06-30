"use client";

import { useEffect, useState } from "react";

type FlipCardProps = {
  frontIcon: React.ReactNode;
  frontTitle: string;
  frontSubtitle: string;

  backIcon: React.ReactNode;
  backTitle: string;
  backSubtitle: string;
};

export default function FlipCard({
  frontIcon,
  frontTitle,
  frontSubtitle,
  backIcon,
  backTitle,
  backSubtitle,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="group h-20 w-full cursor-default"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped((f) => !f)}
      onMouseLeave={() => setFlipped((f) => !f)}
    >
      <div
        className="relative h-full w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateX(180deg)" : "rotateX(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="
          absolute inset-0
          flex items-center gap-3
          rounded-xl
          border border-black/15
          bg-white/5
          px-4
          backdrop-blur-md
        "
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontIcon}

          <div>
            <h4 className="text-sm font-semibold text-[#00365f]">
              {frontTitle}
            </h4>

            <p className="text-xs text-[#00365f]/60">
              {frontSubtitle}
            </p>
          </div>
        </div>

        {/* BACK */}

        <div
          className="
          absolute inset-0
          flex items-center gap-3
          rounded-xl
          border border-black/15
          bg-white/5
          px-4
          backdrop-blur-md
        "
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
          }}
        >
          {backIcon}

          <div>
            <h4 className="text-sm font-semibold text-[#00365f]">
              {backTitle}
            </h4>

            <p className="text-xs text-[#00365f]/60">
              {backSubtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}