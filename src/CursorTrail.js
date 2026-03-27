import { useEffect, useRef } from "react";
import "./cursorTrail.css";

// Sleek, slightly thinner, swirling, neon smoke-like cursor trail
export default function CursorTrail() {
  const canvasRef = useRef(null);
  const trails = useRef([]);
  // Start cursor at (0,0)
  const mouse = useRef({ x: 0, y: 0 });
  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function onMouseMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      emitTrail(last.current.x, last.current.y, e.clientX, e.clientY);
      last.current.x = e.clientX;
      last.current.y = e.clientY;
    }
    window.addEventListener("mousemove", onMouseMove);

    function emitTrail(x1, y1, x2, y2) {
      const dist = Math.hypot(x2 - x1, y2 - y1);
      const steps = Math.max(2, Math.floor(dist / 2));
      for (let i = 0; i < steps; i++) {
        const t = i / steps;
        const x = x1 + (x2 - x1) * t;
        const y = y1 + (y2 - y1) * t;
        const hue = (Date.now() / 7 + i * 10) % 360;
        trails.current.push({
          x,
          y,
          hue,
          alpha: 1,
          life: 0,
          maxLife: 18 + Math.random() * 10,
          width: 2.2 + Math.random() * 0.7, // slightly thinner
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = trails.current.length - 1; i >= 0; i--) {
        const t = trails.current[i];
        t.life++;
        t.alpha = Math.max(0, 1 - t.life / t.maxLife);
        // Draw slightly thinner glowing line (smoke wisp)
        ctx.save();
        ctx.globalAlpha = t.alpha * 0.5;
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.width, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${t.hue}, 100%, 60%, 0.8)`;
        ctx.shadowColor = `hsla(${t.hue}, 100%, 80%, 0.7)`;
        ctx.shadowBlur = 18;
        ctx.lineWidth = t.width;
        ctx.stroke();
        ctx.restore();
        if (t.life > t.maxLife) {
          trails.current.splice(i, 1);
        }
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-trail-canvas"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
