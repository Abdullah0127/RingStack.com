import { Link } from 'react-router-dom'

function ContactCta({ eyebrow = 'Get in touch', title = 'How can we help?', children }) {
  return (
    <section className="cta-section page-container">
      <div className="cta-panel">
        <div className="cta-copy">
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{children || 'Tell us what your business needs. We’ll be happy to help.'}</p>
        </div>
        <Link className="button button-lime" to="/contact">
          Talk to our team <span aria-hidden="true">↗</span>
        </Link>
        <span className="cta-orbit cta-orbit-one" aria-hidden="true" />
        <span className="cta-orbit cta-orbit-two" aria-hidden="true" />
      </div>
    </section>
  )
}

export default ContactCta
