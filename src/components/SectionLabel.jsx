/**
 * Small monospace section marker, e.g. "01 / ABOUT".
 * Omit `number` for subsection labels.
 */
export default function SectionLabel({ number, children, className = "" }) {
  return (
    <p className={`section-label ${className}`}>
      {number && (
        <>
          <span className="section-label-num">{number}</span>
          <span aria-hidden="true">/</span>
        </>
      )}
      <span>{children}</span>
      <span className="section-label-rule" aria-hidden="true" />
    </p>
  );
}
