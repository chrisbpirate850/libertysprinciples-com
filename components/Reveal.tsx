'use client';

import { useEffect, useRef, useState, createElement } from 'react';
import type { ReactNode, ElementType } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delayMs?: number;
};

/**
 * Quiet scroll-into-view fade. Respects prefers-reduced-motion via CSS.
 * Adds .is-visible once the element enters the viewport; one-shot.
 */
export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delayMs = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => setVisible(true), delayMs);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  return createElement(
    Tag,
    {
      ref,
      className: `reveal ${visible ? 'is-visible' : ''} ${className}`.trim(),
    },
    children
  );
}
