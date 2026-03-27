import { useEffect, useRef } from "react";
import "./cursorTrail.css";

// Rocket-like trail: thick at the cursor, fading and thinning out behind, with a glowing, smoky, colorful effect
export default function CursorTrail() {
  const canvasRef = useRef(null);
  const trails = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const last = useRef({ x: 0, y: 0 });
  const isTouching = useRef(false);

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

    function onPointer(x, y, forceSinglePoint = false) {
      mouse.current.x = x;
      mouse.current.y = y;
      if (forceSinglePoint) {
        last.current.x = x;
        last.current.y = y;
      }
      emitTrail(x, y); // Only emit at the current cursor/touch point
      last.current.x = x;
      last.current.y = y;
    }

    function onMouseMove(e) {
      onPointer(e.clientX, e.clientY);
    }
    function onTouchStart(e) {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        isTouching.current = true;
        onPointer(touch.clientX, touch.clientY, true);
      }
    }
    function onTouchMove(e) {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        onPointer(touch.clientX, touch.clientY, true);
      }
    }
    function onTouchEnd() {
      isTouching.current = false;
    }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    function emitTrail(x, y) {
      // Emit a new head point at the cursor/touch
      trails.current.push({
        x,
        y,
        hue: (Date.now() / 7) % 360,
        alpha: 1,
        life: 0,
        maxLife: 38 + Math.random() * 18,
        width: 13 + Math.random() * 3, // thick at the head
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw a smooth, fading, rocket-like trail
      for (let i = 1; i < trails.current.length; i++) {
        const t1 = trails.current[i - 1];
        const t2 = trails.current[i];
        // Fade and thin out as the trail ages
        const fade = Math.pow(1 - t2.life / t2.maxLife, 1.5);
        const width = t2.width * fade + 2;
        ctx.save();
        const grad = ctx.createLinearGradient(t1.x, t1.y, t2.x, t2.y);
        grad.addColorStop(0, `hsla(${t1.hue}, 100%, 60%, ${t1.alpha * 0.32})`);
        grad.addColorStop(1, `hsla(${t2.hue}, 100%, 60%, ${t2.alpha * 0.18})`);
        ctx.strokeStyle = grad;
        ctx.shadowColor = `hsla(${t2.hue}, 100%, 80%, 0.7)`;
        ctx.shadowBlur = 32;
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(t1.x, t1.y);
        ctx.lineTo(t2.x, t2.y);
        ctx.stroke();
        ctx.restore();
      }
      // Update and remove old points
      for (let i = trails.current.length - 1; i >= 0; i--) {
        trails.current[i].life++;
        trails.current[i].alpha = Math.max(0, 1 - trails.current[i].life / trails.current[i].maxLife);
        if (trails.current[i].life > trails.current[i].maxLife) {
          trails.current.splice(i, 1);
        }
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
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
