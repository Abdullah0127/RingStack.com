import { Link } from 'react-router-dom'
import ContactCta from '../components/ContactCta.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'

const services = [
  {
    number: '01',
    type: 'ppc',
    name: 'PPC campaign management',
    summary: 'Make paid search work harder for your business.',
    detail: 'Plan, manage, and refine pay-per-click campaigns around your audience, goals, and budget.',
    points: ['Campaign strategy', 'Keyword and audience targeting', 'Ongoing optimisation'],
  },
  {
    number: '02',
    type: 'meta',
    name: 'Meta Ads',
    summary: 'Reach the people most likely to care.',
    detail: 'Create and manage Facebook and Instagram campaigns that build awareness and encourage enquiries.',
    points: ['Audience and creative planning', 'Campaign setup and management', 'Lead-focused measurement'],
  },
  {
    number: '03',
    type: 'google',
    name: 'Google Ads',
    summary: 'Meet customers at the moment they search.',
    detail: 'Reach relevant searches with focused Google Ads and a clear route from click to enquiry.',
    points: ['Search campaign setup', 'Relevant keyword targeting', 'Conversion tracking'],
  },
  {
    number: '04',
    type: 'leads',
    name: 'Lead generation',
    summary: 'Turn campaign interest into useful enquiries.',
    detail: 'Connect paid campaigns, landing pages, and follow-up so your team can act on new demand.',
    points: ['Lead journey planning', 'Enquiry quality and tracking', 'Reporting and improvement'],
  },
]

const steps = [
  ['01', 'Review', 'Understand your goals, audience, and current campaigns.'],
  ['02', 'Plan', 'Agree on channels, measurement, timing, and budget.'],
  ['03', 'Launch', 'Set up campaigns and make sure the tracking is ready.'],
  ['04', 'Improve', 'Review results and refine the work as we learn.'],
]

function Services() {
  return (
    <>
      <section className="inner-hero">
        <div className="page-container inner-hero-inner">
          <div className="inner-hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Performance marketing</p>
            <h1>More of the right people. <em>More opportunity.</em></h1>
            <p>Focused PPC, Meta Ads, Google Ads, and lead generation for businesses ready to grow.</p>
            <div className="inner-hero-actions"><Link className="button button-dark" to="/contact">Plan a campaign <span aria-hidden="true">↗</span></Link><span>Clear strategy. Measurable action.</span></div>
          </div>
          <div className="service-hero-art" aria-hidden="true">
            <div className="service-orbit orbit-a" />
            <div className="service-orbit orbit-b" />
            <div className="service-hero-center"><span className="brand-symbol"><span /><span /><span /></span><span>Campaign growth.</span></div>
            <div className="service-orbit-label label-a">PPC</div>
            <div className="service-orbit-label label-b">META ADS</div>
            <div className="service-orbit-label label-c">GOOGLE ADS</div>
          </div>
        </div>
      </section>

      <section className="service-catalog section-space page-container">
        <SectionHeading eyebrow="Our services" title="Campaigns designed to generate demand." />
        <div className="catalog-list">
          {services.map((service) => (
            <article className="catalog-item" key={service.number}>
              <span className="catalog-number">{service.number}</span>
              <ServiceIcon type={service.type} />
              <div className="catalog-main">
                <h3>{service.name}</h3>
                <p className="catalog-summary">{service.summary}</p>
                <p className="catalog-detail">{service.detail}</p>
              </div>
              <ul className="catalog-points">
                {service.points.map((point) => <li key={point}><span>✓</span>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section section-space">
        <div className="page-container">
          <SectionHeading eyebrow="Getting started" title="A clear route from plan to performance." />
          <div className="process-grid">
            {steps.map(([number, title, description]) => (
              <article className="process-card" key={number}>
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta eyebrow="Need a hand?" title="Let’s talk about your next campaign.">
        Share your goals for PPC, Meta Ads, Google Ads, or lead generation. We’ll help you choose a clear next step.
      </ContactCta>
    </>
  )
}

export default Services
