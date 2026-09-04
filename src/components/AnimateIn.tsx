'use client';

import { useEffect, useRef, CSSProperties, ReactNode } from 'react';

type Variant = 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in';

type AnimateInProps = {
  children: ReactNode;
  /** Delay in milliseconds before the animation plays after entering the viewport */
  delay?: number;
  variant?: Variant;
  className?: string;
};

const hiddenStyles: Record<Variant, CSSProperties> = {
  'fade-up':    { opacity: 0, transform: 'translateY(40px)' },
  'fade-left':  { opacity: 0, transform: 'translateX(-40px)' },
  'fade-right': { opacity: 0, transform: 'translateX(40px)' },
  'fade-in':    { opacity: 0, transform: 'translateY(0)' },
};

export function AnimateIn({
  children,
  delay = 0,
  variant = 'fade-up',
  className = '',
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Clear any pending timer when state changes
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }

        if (entry.isIntersecting) {
          // Scrolled INTO view — animate in after delay
          timerRef.current = setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translate(0, 0)';
          }, delay);
        } else {
          // Scrolled OUT of view — instantly reset to hidden (no transition so it's instant)
          el.style.transition = 'none';
          el.style.opacity = hiddenStyles[variant].opacity as string;
          el.style.transform = hiddenStyles[variant].transform as string;

          // Re-enable transition after the reset frame so next entry animates
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              el.style.transition = 'opacity 0.65s ease-out, transform 0.65s ease-out';
            });
          });
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [delay, variant]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...hiddenStyles[variant],
        transition: 'opacity 0.65s ease-out, transform 0.65s ease-out',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
