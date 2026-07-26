import { useEffect, useRef, useState } from "react";

export function useGridReveal(count, { threshold = 0.08, step = 110 } = {}) {
  const containerRef = useRef(null);
  const [revealed, setRevealed] = useState(() => new Array(count).fill(false));

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(new Array(count).fill(true));
      return undefined;
    }

    const timeouts = [];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        for (let i = 0; i < count; i++) {
          timeouts.push(
            setTimeout(() => {
              setRevealed((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * step)
          );
        }
        observer.unobserve(node);
      },
      { threshold }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, [count, threshold, step]);

  return [containerRef, revealed];
}
