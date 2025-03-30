import { useEffect, useRef } from 'react';
import './gradientbackground.css';

interface GradientBackgroundProps {
  isPlaying: boolean;
  palette: string[];
}

export const GradientBackground = ({ isPlaying, palette }: GradientBackgroundProps) => {
  const interBubbleRef = useRef<HTMLDivElement>(null);
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  useEffect(() => {
    const interBubble = interBubbleRef.current;
    if (!interBubble) return;

    // Convert hex colors to RGB for the CSS variables
    const rgbColors = palette.map(hex => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r}, ${g}, ${b}`;
    });

    // Set CSS variables
    const root = document.documentElement;
    rgbColors.forEach((color, index) => {
      root.style.setProperty(`--color${index + 1}`, color);
    });

    function move() {
      if (!isPlaying || !interBubble) return;
      
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    function handleMouseMove(event: MouseEvent) {
      tgX = event.clientX;
      tgY = event.clientY;
    }

    window.addEventListener('mousemove', handleMouseMove);
    
    if (isPlaying) {
      move();
      // Auto-animate when playing
      setInterval(() => {
        tgX = Math.random() * window.innerWidth;
        tgY = Math.random() * window.innerHeight;
      }, 3000);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isPlaying, palette]);

  return (
    <div className="gradient-bg">
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div ref={interBubbleRef} className="interactive"></div>
      </div>
    </div>
  );
}; 