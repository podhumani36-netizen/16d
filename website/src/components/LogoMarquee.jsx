import { useEffect, useRef } from 'react';

// Client logos run in two opposite directions, with each logo shown once.
export default function LogoMarquee({ logos }) {
  const midpoint = Math.ceil(logos.length / 2);
  const rows = [logos.slice(0, midpoint), logos.slice(midpoint)];
  const rowRefs = useRef([]);
  const paused = useRef(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return undefined;

    const rows = rowRefs.current.filter(Boolean);
    const offsets = rows.map((row, index) => (
      index === 1 ? Math.min(0, row.clientWidth - row.firstElementChild.scrollWidth) : 0
    ));
    const speed = 40;
    let lastTime = performance.now();
    let frame;

    const animate = (now) => {
      const elapsed = Math.min(now - lastTime, 40) / 1000;
      lastTime = now;

      if (!paused.current) {
        rows.forEach((row, index) => {
          const track = row.firstElementChild;
          if (!track?.children.length) return;
          const direction = index === 0 ? -1 : 1;
          const stepFor = (item) => item.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
          offsets[index] += direction * speed * elapsed;

          if (direction < 0) {
            while (track.firstElementChild && offsets[index] + track.firstElementChild.offsetLeft + track.firstElementChild.offsetWidth <= 0) {
              const first = track.firstElementChild;
              offsets[index] += stepFor(first);
              track.append(first);
            }
          } else {
            while (track.lastElementChild && offsets[index] + track.lastElementChild.offsetLeft >= row.clientWidth) {
              const last = track.lastElementChild;
              offsets[index] -= stepFor(last);
              track.prepend(last);
            }
          }
          track.style.transform = `translate3d(${offsets[index]}px, 0, 0)`;
        });
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [logos.length]);

  return (
    <div
      className="marquee"
      aria-label="Client logos"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      {rows.map((row, index) => (
        <div className="marquee__row" key={index} ref={(element) => { rowRefs.current[index] = element; }}>
          <ul className="marquee__track">
            {row.map((l) => (
              <li key={l.src} className={`marquee__item ${['Value Ingredients', 'Pothys', 'Burgerman'].includes(l.name) ? 'marquee__item--large' : ''} ${l.name === 'Value Ingredients' ? 'marquee__item--value' : ''}`}>
                <img src={l.src} alt={l.name} title={l.name} loading="lazy" decoding="async" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
