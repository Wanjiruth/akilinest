import { useEffect } from "react";

export function CursorTrail() {
  useEffect(() => {
    const cols = ['#E8693A', '#1A9DC4', '#C8A84B', '#7F5AF0', '#2CB67D', '#C4561A'];
    let ci = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.35) return;

      const d = document.createElement('div');
      const s = Math.random() * 9 + 4;

      d.className = 'cdot';
      d.style.width = `${s}px`;
      d.style.height = `${s}px`;
      d.style.background = cols[ci % cols.length];
      d.style.top = `${e.clientY - s / 2}px`;
      d.style.left = `${e.clientX - s / 2}px`;

      document.body.appendChild(d);
      ci++;

      setTimeout(() => {
        d.style.opacity = '0';
        d.style.transform = 'scale(2.5)';
        setTimeout(() => d.remove(), 600);
      }, 50);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}
