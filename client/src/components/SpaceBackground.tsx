import { useEffect, useRef } from 'react';

/**
 * Space Background Component
 * Design: Cyberpunk Neon Cosmos
 * - Animated stars with twinkling effect
 * - Subtle nebula gradient
 * - Parallax on scroll
 */

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      speed: number;
      color: string;
    }> = [];

    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.5 + 0.1,
        color: ['#06b6d4', '#a855f7', '#3b82f6', '#ffffff'][
          Math.floor(Math.random() * 4)
        ],
      });
    }

    let animationId: number;
    let scrollY = 0;

    const animate = () => {
      // Clear canvas with dark background
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add nebula gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(168, 85, 247, 0.05)');
      gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.02)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and animate stars
      stars.forEach((star, index) => {
        // Twinkling effect
        const twinkle = Math.sin(Date.now() * 0.001 + index) * 0.3 + 0.7;
        ctx.globalAlpha = star.opacity * twinkle;

        // Parallax effect
        const parallaxY = scrollY * (0.1 + index * 0.0001);

        // Draw star
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(
          star.x,
          (star.y + parallaxY) % canvas.height,
          star.radius,
          0,
          Math.PI * 2
        );
        ctx.fill();

        // Glow effect for some stars
        if (index % 5 === 0) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = (star.opacity * twinkle) * 0.3;
          ctx.stroke();
        }
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    // Handle scroll parallax
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: '#0f172a' }}
    />
  );
}
