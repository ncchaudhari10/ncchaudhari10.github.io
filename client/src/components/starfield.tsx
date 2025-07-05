import { useEffect, useRef } from "react";

export default function Starfield() {
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

    // Star properties
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01
      });
    }

    // Comet properties
    const comets: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }> = [];

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.01;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Update and draw comets
      comets.forEach((comet, index) => {
        comet.x += comet.vx;
        comet.y += comet.vy;
        comet.life--;

        if (comet.life <= 0) {
          comets.splice(index, 1);
          return;
        }

        const alpha = comet.life / comet.maxLife;
        const gradient = ctx.createLinearGradient(
          comet.x, comet.y,
          comet.x - comet.vx * 10, comet.y - comet.vy * 10
        );
        gradient.addColorStop(0, `rgba(255, 215, 0, ${alpha})`);
        gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');

        ctx.beginPath();
        ctx.arc(comet.x, comet.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw comet tail
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(comet.x - comet.vx * 15, comet.y - comet.vy * 15);
        ctx.strokeStyle = `rgba(255, 215, 0, ${alpha * 0.5})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };

    // Create comets periodically
    const createComet = () => {
      if (Math.random() < 0.1) {
        comets.push({
          x: -50,
          y: Math.random() * canvas.height,
          vx: Math.random() * 3 + 2,
          vy: Math.random() * 2 - 1,
          life: 200,
          maxLife: 200
        });
      }
    };

    const cometInterval = setInterval(createComet, 2000);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(cometInterval);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="starfield fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}
