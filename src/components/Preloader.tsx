'use client';

import { useEffect, useState } from 'react';

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after the page has loaded (or after a minimum display time)
    const minDisplay = setTimeout(() => {
      setFadeOut(true);
    }, 800);

    const hide = setTimeout(() => {
      setVisible(false);
    }, 1300); // 800ms display + 500ms fade

    return () => {
      clearTimeout(minDisplay);
      clearTimeout(hide);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo mark */}
      <div className="mb-6 flex flex-col items-center gap-1">
        {/* Real JRH logo */}
        <img
          src="/JRH_logo_highres.png"
          alt="JR Hospital"
          className="h-24 w-24 object-contain animate-pulse"
        />
        <p className="mt-4 font-display text-2xl font-bold tracking-tight text-jr-ink">
          JR <span className="text-jr-green">Hospital</span>
        </p>
        <p className="text-xs font-medium uppercase tracking-widest text-jr-muted">
          Quality Healthcare. Trusted Care.
        </p>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-48 overflow-hidden rounded-full bg-jr-line">
        <div className="h-full animate-preloader-bar rounded-full bg-jr-green" />
      </div>
    </div>
  );
}
