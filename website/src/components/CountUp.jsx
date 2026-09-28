import { useEffect, useRef, useState } from 'react';

// Counts up to a stat like "130,000+" when it scrolls into view, keeping any prefix/suffix.
// Shows the final value straight away for reduced motion or when the value has no number.
export default function CountUp({ value, duration = 1400 }) {
  const match = /^(\D*)([\d,]+)(.*)$/.exec(value);
  const target = match ? Number(match[2].replace(/,/g, '')) : null;
  const ref = useRef(null);
  const [n, setN] = useState(target);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (target == null || reduce || !el || !('IntersectionObserver' in window)) return;

    setN(0);
    let frame;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  if (target == null) return <span>{value}</span>;
  return (
    <span ref={ref} className="countup" aria-label={value}>
      {match[1]}
      {n.toLocaleString('en-US')}
      {match[3]}
    </span>
  );
}
