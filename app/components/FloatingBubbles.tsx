const bubbles = [
  "left-[5%] bottom-[-20px] h-3 w-3",
  "left-[18%] bottom-[120px] h-2 w-2",
  "left-[35%] bottom-[40px] h-5 w-5",
  "left-[52%] bottom-[260px] h-3 w-3",
  "left-[68%] bottom-[80px] h-4 w-4",
  "left-[83%] bottom-[180px] h-2 w-2",
  "left-[94%] bottom-[20px] h-3 w-3",
];

export default function FloatingBubbles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {bubbles.map((bubble, index) => (
        <span
          key={index}
          className={`
            absolute
            rounded-full
            border
            border-white/30
            bg-white/10
            shadow-[0_0_18px_rgba(34,211,238,0.25)]
            backdrop-blur-sm
            animate-floatBubble
            ${bubble}
          `}
        />
      ))}
    </div>
  );
}