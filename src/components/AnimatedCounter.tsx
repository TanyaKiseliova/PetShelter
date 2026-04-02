import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  duration = 2000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const stepTime = 20;
    const steps = Math.ceil(duration / stepTime);
    const increment = target / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        element.textContent = Math.ceil(current).toLocaleString();
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span ref={ref}>0</span>;
}
