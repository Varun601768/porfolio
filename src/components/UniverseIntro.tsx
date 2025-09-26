import React, { useEffect, useRef, useState } from 'react';

const STAR_COUNT = 120;
const STAR_COLORS = ['#fff', '#aee', '#9cf', '#fcf', '#ffd700'];

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const UniverseIntro: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 1200); // Wait for fade-out
    }, 2600);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    // Generate stars
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: randomBetween(0, w),
      y: randomBetween(0, h),
      r: randomBetween(0.7, 2.5),
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      dx: randomBetween(-0.15, 0.15),
      dy: randomBetween(-0.15, 0.15),
    }));

    let frame = 0;
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      stars.forEach(star => {
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0 || star.x > w) star.dx *= -1;
        if (star.y < 0 || star.y > h) star.dy *= -1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      frame++;
      if (visible) requestAnimationFrame(animate);
    }
    let running = true;
    function loop() {
      if (!running) return;
      animate();
      requestAnimationFrame(loop);
    }
    loop();
    // Clean up
    return () => { running = false; };
  }, [visible]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ width: '100vw', height: '100vh' }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', width: '100vw', height: '100vh' }} />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl mb-4 animate-fadeIn">Welcome to My Portfolio</h1>
        <p className="text-lg text-white/80 animate-fadeIn animation-delay-600">A universe of creativity and code</p>
      </div>
    </div>
  );
};

export default UniverseIntro;
