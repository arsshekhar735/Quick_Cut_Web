import { useEffect, useRef, useState } from "react";

const ScissorCursor = () => {
  const cursorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleScroll = () => {
      setIsOpen(true); // Open on scroll
    };

    const handleClick = () => {
      setIsOpen(false);
      setTimeout(() => setIsOpen(true), 150); // Close then open
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-50 w-8 h-8 pointer-events-none mix-blend-difference"
      style={{
        left: mousePos.x,
        top: mousePos.y,
        transform: `translate(-50%, -50%) ${isOpen ? "scale(1)" : "scale(0.85)"}`,
        transition: "transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Scissor SVG - opens/closes */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`w-full h-full transition-all duration-150 ease-out ${
          isOpen ? "scale-100 rotate-0" : "scale-[0.85] rotate-[-5deg]"
        }`}
      >
        {/* Left blade */}
        <path
          d="M4 4L12 12M12 12L20 20M12 12V4M12 12H20"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`origin-[50%_20%] transition-all duration-200 ${
            isOpen ? "rotate-0 scale-y-100" : "rotate-[-15deg] scale-y-90"
          }`}
        />
        {/* Right blade */}
        <path
          d="M4 20L12 12M12 12L20 4M12 12V20M12 12H4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`origin-[50%_80%] transition-all duration-200 delay-50 ${
            isOpen ? "rotate-0 scale-y-100" : "rotate-[15deg] scale-y-90"
          }`}
        />
        {/* Pivot point */}
        <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    </div>
  );
};

export default ScissorCursor;
