import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading.jsx'

const features = [
  {
    number: '01',
    title: 'A plan built around your goals',
    description: 'Campaign priorities, audiences, and budgets are clear before launch.',
  },
  {
    number: '02',
    title: 'The right channel mix',
    description: 'Bring Google Ads, Meta Ads, and PPC together where it makes sense.',
  },
  {
    number: '03',
    title: 'Useful measurement',
    description: 'Track enquiries and campaign activity so decisions are based on evidence.',
  },
  {
    number: '04',
    title: 'Keep improving',
    description: 'Review what is working and refine targeting, creative, and landing pages.',
  },
]

function WhyChooseUs() {
  return (
    <section className="why-section section-space">
      <div className="page-container why-layout">
        <div className="why-content">
          <div className="why-intro">
            <SectionHeading eyebrow="How we work" title="Performance marketing, without the guesswork.">
              Clear strategy, considered campaign management, and reporting that helps you decide what to do next.
            </SectionHeading>
            <Link className="why-about-link" to="/about">More about Ringstack <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="why-feature-list">
            {features.map((feature) => (
              <article className="why-feature" key={feature.number}>
                <span className="why-feature-number">{feature.number}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <span className="why-feature-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
          <div className="why-footnote"><span className="proof-dot" /> Focused on better enquiries, not vanity metrics</div>
        </div>

        <div className="why-visual" aria-label="Ringstack's connected paid search, paid social, and lead generation services">
          <div className="why-visual-glow" />
          <div className="why-visual-orbit why-visual-orbit-outer" />
          <div className="why-visual-orbit why-visual-orbit-inner" />
          <div className="why-visual-core">
            <span className="why-core-mark">R<span>.</span></span>
            <span>More relevant<br />conversations</span>
          </div>
          <div className="why-service-chip why-service-chip-leads"><span aria-hidden="true">↗</span> PPC</div>
          <div className="why-service-chip why-service-chip-web"><span aria-hidden="true">⌘</span> Meta Ads</div>
          <div className="why-service-chip why-service-chip-it"><span aria-hidden="true">◎</span> Google Ads</div>
          <span className="why-visual-caption">Connected campaigns. Clear next steps.</span>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
