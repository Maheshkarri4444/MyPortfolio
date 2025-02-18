import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

export const MouseTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rafId = useRef<number>();
  const targetPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const lerp = (start: number, end: number, t: number) => {
      return start * (1 - t) + end * t;
    };

    const addPoint = () => {
      // Smooth interpolation between current position and target
      mousePos.current.x = lerp(mousePos.current.x, targetPos.current.x, 0.15);
      mousePos.current.y = lerp(mousePos.current.y, targetPos.current.y, 0.15);

      points.current.push({
        x: mousePos.current.x,
        y: mousePos.current.y,
        age: 0,
      });

      // Limit points for performance
      if (points.current.length > 100) {
        points.current = points.current.slice(-100);
      }
    };

    const drawTrail = () => {
      if (points.current.length < 2) return;

      ctx.beginPath();
      ctx.moveTo(points.current[0].x, points.current[0].y);

      // Create smooth curve through points
      for (let i = 1; i < points.current.length - 1; i++) {
        const xc = (points.current[i].x + points.current[i + 1].x) / 2;
        const yc = (points.current[i].y + points.current[i + 1].y) / 2;
        ctx.quadraticCurveTo(points.current[i].x, points.current[i].y, xc, yc);
      }

      // Connect to the last point
      if (points.current.length > 1) {
        const lastPoint = points.current[points.current.length - 1];
        ctx.lineTo(lastPoint.x, lastPoint.y);
      }

      const gradient = ctx.createLinearGradient(
        points.current[0].x,
        points.current[0].y,
        points.current[points.current.length - 1].x,
        points.current[points.current.length - 1].y
      );

      // Beautiful gradient from deep red to bright red
      gradient.addColorStop(0, 'rgba(255, 0, 0, 0)');
      gradient.addColorStop(0.5, 'rgba(255,0, 0, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 0, 0, 1)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 12; // Thicker line
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add new point
      addPoint();

      // Update points age
      points.current = points.current.filter((point) => {
        point.age += 1;
        return point.age < 50;
      });

      // Draw the trail
      drawTrail();

      rafId.current = requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent | Touch) => {
      const rect = canvas.getBoundingClientRect();
      targetPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e);
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleMove(e.touches[0]);
    };

    // Event listeners
    window.addEventListener('resize', updateCanvasSize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Initial setup
    updateCanvasSize();
    mousePos.current = { ...targetPos.current };
    rafId.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-20 pointer-events-auto"
      style={{ touchAction: 'none' }}
    />
  );
};