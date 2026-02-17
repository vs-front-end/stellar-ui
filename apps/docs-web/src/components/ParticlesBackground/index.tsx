import { useEffect, useRef } from 'react';
import type { ThemeVariant } from '@stellar-ui-kit/shared';

interface IStar {
  x: number;
  y: number;
  radius: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface IParticlesBackground {
  className?: string;
  particleCount?: number;
  theme?: ThemeVariant;
}

export const ParticlesBackground = ({
  className = '',
  particleCount = 150,
  theme = 'dark',
}: IParticlesBackground) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const starsRef = useRef<IStar[]>([]);
  const offsetXRef = useRef<number>(0);
  const offsetYRef = useRef<number>(0);
  const rotationAngleRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      starsRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width * 2 - canvas.width,
          y: Math.random() * canvas.height * 2 - canvas.height,
          radius: Math.random() * 1.2 + 0.5,
          baseOpacity: Math.random() * 0.4 + 0.4,
          twinkleSpeed: Math.random() * 0.003 + 0.003,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = (timestamp: number) => {
      if (!timeRef.current) timeRef.current = timestamp;
      const deltaTime = timestamp - timeRef.current;
      timeRef.current = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const stars = starsRef.current;
      const speed = 0.1;
      const rotationSpeed = 0.0001;

      offsetXRef.current += speed * (deltaTime / 16);
      offsetYRef.current -= speed * 0.5 * (deltaTime / 16);
      rotationAngleRef.current += rotationSpeed * (deltaTime / 16);

      const maxOffsetX = canvas.width * 2;
      const maxOffsetY = canvas.height * 2;

      if (offsetXRef.current >= maxOffsetX) {
        offsetXRef.current = offsetXRef.current - maxOffsetX;
      }
      if (offsetYRef.current <= -maxOffsetY) {
        offsetYRef.current = offsetYRef.current + maxOffsetY;
      }

      const color = theme === 'light' ? '0, 0, 0' : '255, 255, 255';

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngleRef.current);
      ctx.translate(-centerX, -centerY);

      stars.forEach((star) => {
        let x = star.x + offsetXRef.current;
        let y = star.y + offsetYRef.current;

        const maxOffsetX = canvas.width * 2;
        const maxOffsetY = canvas.height * 2;

        if (x < -canvas.width) x += maxOffsetX;
        if (x > canvas.width * 2) x -= maxOffsetX;
        if (y < -canvas.height) y += maxOffsetY;
        if (y > canvas.height * 2) y -= maxOffsetY;

        if (
          x < -50 ||
          x > canvas.width + 50 ||
          y < -50 ||
          y > canvas.height + 50
        ) {
          return;
        }

        const twinkle =
          Math.sin(timeRef.current * star.twinkleSpeed + star.twinklePhase) *
            0.2 +
          0.8;
        const opacity = star.baseOpacity * twinkle;

        ctx.beginPath();
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity})`;
        ctx.fill();
      });

      ctx.restore();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
};
