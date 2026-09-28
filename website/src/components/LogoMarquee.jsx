// Client logos scrolling in two rows (opposite directions). Pauses on hover;
// with reduced motion it becomes a static, scrollable row (see styles.css).
export default function LogoMarquee({ logos }) {
  const half = Math.ceil(logos.length / 2);
  const rows = [logos.slice(0, half), logos.slice(half)].filter((r) => r.length);

  return (
    <div className="marquee" aria-label="Client logos">
      {rows.map((row, r) => (
        <div key={r} className={`marquee__row ${r % 2 ? 'marquee__row--reverse' : ''}`}>
          {/* The list is rendered twice so the loop is seamless; the copy is hidden from screen readers. */}
          {[0, 1].map((copy) => (
            <ul key={copy} className="marquee__track" aria-hidden={copy === 1 || undefined}>
              {row.map((l) => (
                <li key={l.src} className="marquee__item">
                  <img src={l.src} alt={copy === 0 ? l.name : ''} loading="lazy" decoding="async" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}
