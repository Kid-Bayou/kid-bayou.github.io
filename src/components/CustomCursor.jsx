import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const canUseCustomCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (!canUseCustomCursor) return undefined;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return undefined;

    document.body.classList.add("custom-cursor-active");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId;

    function handleMouseMove(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    }

    function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      rafId = requestAnimationFrame(animateRing);
    }

    function grow() {
      cursor.style.width = "18px";
      cursor.style.height = "18px";
      ring.style.width = "48px";
      ring.style.height = "48px";
    }

    function shrink() {
      cursor.style.width = "10px";
      cursor.style.height = "10px";
      ring.style.width = "30px";
      ring.style.height = "30px";
    }

    document.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animateRing);

    const interactiveElements = document.querySelectorAll("a, button, .card");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, [prefersReducedMotion]);

  return (
    <>
      <div id="cursor" ref={cursorRef} aria-hidden="true"></div>
      <div id="cursor-ring" ref={ringRef} aria-hidden="true"></div>
    </>
  );
}

export default CustomCursor;
