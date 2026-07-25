import { useEffect, useRef, useState, useCallback } from "react";

export interface StaggerChildrenOptions {
  staggerDelay?: number;
  duration?: number;
  easing?: string;
  threshold?: number;
  once?: boolean;
}

export function useStaggerChildren<T extends HTMLElement = HTMLDivElement>(
  options: StaggerChildrenOptions = {},
) {
  const {
    staggerDelay = 100,
    duration = 600,
    easing = "ease-out",
    threshold = 0.1,
    once = true,
  } = options;

  const containerRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  const animateChildren = useCallback(
    (container: T) => {
      const children = container.children;

      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        const delay = i * staggerDelay;

        child.style.opacity = "1";
        child.style.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)";
        child.style.transitionDelay = `${delay}ms`;
      }
    },
    [staggerDelay],
  );

  const resetChildren = useCallback((container: T) => {
    const children = container.children;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      child.style.opacity = "0";
      child.style.transform = "translate3d(0, 20px, 0) scale3d(0.95, 0.95, 1)";
      child.style.transitionDelay = "0ms";
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const children = container.children;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      child.style.opacity = "0";
      child.style.transform = "translate3d(0, 20px, 0) scale3d(0.95, 0.95, 1)";
      child.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (!once) {
            setIsVisible(false);
            resetChildren(container);
          }

          return;
        }

        if (once && hasAnimated.current) return;

        hasAnimated.current = true;
        setIsVisible(true);
        animateChildren(container);

        if (once) {
          observer.unobserve(container);
        }
      },
      { threshold },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [duration, easing, threshold, once, animateChildren, resetChildren]);

  return { ref: containerRef, isVisible };
}
