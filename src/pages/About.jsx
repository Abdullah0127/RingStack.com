import { Link } from 'react-router-dom'
import ContactCta from '../components/ContactCta.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const principles = [
  ['People first', 'Speak directly with the people doing the work.'],
  ['Clear communication', 'We explain the work, timing, and cost.'],
  ['Reliable support', 'We build solutions you can depend on.'],
]

function About() {
  return (
    <>
      <section className="inner-hero about-hero">
        <div className="page-container inner-hero-inner">
          <div className="inner-hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> About Ringstack</p>
            <h1>Good people. <em>Practical technology.</em></h1>
            <p>We help businesses grow with better leads, websites, and IT support. Our UK team keeps things clear and simple.</p>
            <Link className="button button-dark" to="/contact">Talk to us <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="about-hero-art">
            <div className="about-photo-placeholder">
              <span className="about-large-letter">R</span>
              <span className="about-art-caption">Clear advice.<br />Friendly support.</span>
              <span className="about-art-spark" aria-hidden="true">✳</span>
            </div>
            <div className="about-art-note"><span className="proof-dot" /> Based in London<br /><small>Here to help wherever you are</small></div>
          </div>
        </div>
      </section>

      <section className="about-story section-space page-container">
        <div className="story-label"><span>01</span><span>About us</span></div>
        <div className="story-copy">
          <p className="eyebrow">Based in the UK</p>
          <h2>One team for leads, websites, and IT.</h2>
          <p>We work closely with you to solve everyday business needs.</p>
          <p>From the first conversation to ongoing support, you’ll know who to contact.</p>
        </div>
      </section>

      <section className="principles-section section-space">
        <div className="page-container">
          <SectionHeading eyebrow="How we work" title="Clear, useful, and dependable." />
          <div className="principles-grid">
            {principles.map(([title, text], index) => (
              <article className="principle-card" key={title}>
                <span className="principle-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta title="How can we help?">
        Tell us what you’re looking for. We’ll get back to you within one business day.
      </ContactCta>
    </>
  )
}

export default About
