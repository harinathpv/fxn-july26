"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done) {
            const duration = 1400;
            const start = performance.now();
            function tick(now: number) {
              const p = Math.min((now - start) / duration, 1);
              setValue(Math.floor(p * target));
              if (p < 1) {
                requestAnimationFrame(tick);
              } else {
                setValue(target);
                setDone(true);
              }
            }
            requestAnimationFrame(tick);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, done]);

  return <span ref={ref} className="num">{value}+</span>;
}
