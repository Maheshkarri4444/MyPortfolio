import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  angle: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  rotationSpeed: number;
  colorIndex: number;
}

const SparkleEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  // Color schemes using red-600 (rgb(220, 38, 38))
  const colorSchemes = [
    {
      center: 'rgba(220, 38, 38, ', // red-600
      middle: 'rgba(185, 28, 28, ', // red-700
      outer: 'rgba(153, 27, 27, '   // red-800
    },
    {
      center: 'rgba(220, 38, 38, ', // red-600
      middle: 'rgba(220, 38, 38, ', // red-600
      outer: 'rgba(185, 28, 28, '   // red-700
    },
    {
      center: 'rgba(248, 113, 113, ', // red-400
      middle: 'rgba(220, 38, 38, ',   // red-600
      outer: 'rgba(185, 28, 28, '     // red-700
    }
  ];

  const createParticle = (x: number, y: number): Particle => ({
    x,
    y,
    angle: Math.random() * Math.PI * 2,
    size: Math.random() * 4 + 2,
    speedX: (Math.random() - 0.5) * 8,
    speedY: (Math.random() - 0.5) * 8 - 2, // Slight upward bias
    life: 1,
    rotationSpeed: (Math.random() - 0.5) * 0.2,
    colorIndex: Math.floor(Math.random() * colorSchemes.length)
  });

  const drawSparkle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.angle);
    
    const colors = colorSchemes[particle.colorIndex];
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size);
    gradient.addColorStop(0, colors.center + particle.life + ')');
    gradient.addColorStop(0.5, colors.middle + particle.life * 0.8 + ')');
    gradient.addColorStop(1, colors.outer + particle.life * 0.5 + ')');
    
    ctx.fillStyle = gradient;
    
    // Draw star-like shape with more points for sparkle
    ctx.beginPath();
    const points = 5;
    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? particle.size : particle.size * 0.4;
      const angle = (i * Math.PI) / points;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.fill();
    
    ctx.restore();
  };

  const updateParticles = (ctx: CanvasRenderingContext2D) => {
    particles.current = particles.current
      .map((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.speedY += 0.1; // Gravity effect
        particle.angle += particle.rotationSpeed;
        particle.life -= 0.025;
        particle.size *= 0.99; // Gradually decrease size
        return particle;
      })
      .filter((particle) => particle.life > 0);

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Enhanced glow effect using red-600
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'rgba(220, 38, 38, 0.8)'; // red-600 glow

    particles.current.forEach((particle) => {
      drawSparkle(ctx, particle);
    });

    animationFrameId.current = requestAnimationFrame(() => updateParticles(ctx));
  };

  const handlePointerMove = (e: TouchEvent | MouseEvent) => {
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
    mousePos.current = { x, y };

    // Create more particles for a denser effect
    for (let i = 0; i < 6; i++) {
      particles.current.push(createParticle(x, y));
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Add event listeners
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove);

    // Start animation
    updateParticles(ctx);

    return () => {
      window.removeEventListener('resize', setSize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 100,
      }}
    />
  );
};

export default SparkleEffect;