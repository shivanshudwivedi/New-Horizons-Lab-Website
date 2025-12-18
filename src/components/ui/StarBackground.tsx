"use client";

import { useEffect, useState } from "react";

export function StarBackground() {
  const [stars, setStars] = useState<{ top: string; left: string; size: string; opacity: number }[]>([]);

  useEffect(() => {
    const count = 100;
    const newStars = Array.from({ length: count }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </div>
  );
}

