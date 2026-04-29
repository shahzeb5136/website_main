"use client";
import React, { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
}

export function useCountUp(target: number, suffix = "") {
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const dur = 1400, start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        const v = Math.round(target * eased);
        el.textContent = v + (t === 1 ? suffix : "");
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, suffix]);
  return ref;
}

export function HeroHeadline({ text }: { text: string }) {
  const words = text.split(/(\s+)/);
  let idx = 0;
  return (
    <h1 className="serif hero-h1">
      {words.map((w, i) =>
        /^\s+$/.test(w)
          ? <React.Fragment key={i}>{w}</React.Fragment>
          : (
            <span key={i} className="word" style={{ animationDelay: `${0.15 + (idx++) * 0.045}s` }}>
              {w}
            </span>
          )
      )}
    </h1>
  );
}
