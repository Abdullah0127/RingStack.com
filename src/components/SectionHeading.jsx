function SectionHeading({ eyebrow, title, children, centered = false }) {
  return (
    <div className={`section-heading${centered ? ' is-centered' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <p className="section-description">{children}</p>}
    </div>
  )
}

export default SectionHeading
