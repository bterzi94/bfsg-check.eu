'use client';

import { useEffect, useState } from 'react';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('check-form');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div
      role="complementary"
      aria-label="Schnellzugriff: BFSG-Check anfordern"
      className="fixed bottom-0 inset-x-0 z-50 sm:hidden border-t border-ergo-border bg-white/95 backdrop-blur-sm px-4 py-3 shadow-lg"
    >
      <a
        href="#check-form"
        className="flex w-full items-center justify-center rounded-lg bg-ergo-red px-4 py-3.5 text-sm font-bold text-white transition hover:bg-ergo-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ergo-red focus-visible:ring-offset-2"
      >
        Kostenlosen BFSG-Check anfordern
      </a>
    </div>
  );
}
