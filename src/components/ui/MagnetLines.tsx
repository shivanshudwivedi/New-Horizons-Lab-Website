"use client";

import React, { useRef, useEffect } from 'react';
import './MagnetLines.css';

export default function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = '100%',
  lineColor = '#efefef',
  lineWidth = '1vmin',
  lineHeight = '6vmin',
  baseAngle = -10,
  className = '',
  style = {}
}: {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('span');

    const onPointerMove = (pointer: { x: number; y: number }) => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;

        const r =
          ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

        (item as HTMLElement).style.setProperty('--rotate', `${r}deg`);
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      onPointerMove({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('pointermove', handleMouseMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
    };
  }, []);

  const total = rows * columns;

  // Create spans with inline styles for rotation
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      style={{
        transform: `rotate(var(--rotate, ${baseAngle}deg))`,
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight,
        display: 'block', // Ensure spans are block-level
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={`magnetLines-container ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: containerSize,
        height: containerSize, // Ensure height is set
        ...style,
      }}
    >
      {spans}
    </div>
  );
}
