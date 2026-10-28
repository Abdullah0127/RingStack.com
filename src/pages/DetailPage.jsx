import { Link } from 'react-router-dom'
import { CtaBand, Section } from '../components/Sections.jsx'

export function DetailPage({ data, eyebrow = 'Ringstack' }) {
  return <><header className="page-hero"><div className="container"><p className="section-kicker">{eyebrow}</p><h1>{data.title}</h1><p>{data.intro}</p></div></header><Section eyebrow="A considered approach" title="Campaigns shaped around the details"><div className="three-grid">{data.sections.map((section,index)=><article className="card" key={section.title}><p className="section-kicker">0{index+1}</p><h2>{section.title}</h2><p>{section.text}</p></article>)}</div></Section><Section compact><div className="surface-inverse"><p className="section-kicker">Find a suitable next step</p><h2>Start with a clear conversation.</h2><p>Share your requirements and we’ll discuss campaign fit, expectations and possible next steps.</p><Link className="button button-primary" to="/contact">Talk to Ringstack</Link></div></Section></>
}

export function IndustryIndex({ industries }) {
  return <><header className="page-hero"><div className="container"><p className="section-kicker">Industries</p><h1>Campaigns for service-led businesses.</h1><p>Explore the markets where Ringstack helps connect customer interest with the right team.</p></div></header><Section eyebrow="Our markets" title="Choose an industry"><div className="three-grid">{industries.map((industry)=><article className="card" key={industry.slug}><span className="feature-icon" aria-hidden="true">{industry.icon}</span><h2>{industry.name}</h2><p>{industry.summary}</p><Link className="card-link" to={`/industries/${industry.slug}`}>Explore {industry.name} <span aria-hidden="true">→</span></Link></article>)}</div></Section><CtaBand/></>
}

export function PolicyPage({ title, intro, sections }) {
  return <><header className="page-hero"><div className="container"><p className="section-kicker">Ringstack policies</p><h1>{title}</h1><p>{intro}</p></div></header><Section eyebrow="Please read carefully" title="Information for website visitors"><div className="content-grid">{sections.map((section,index)=><article className="card" key={section.title}><p className="section-kicker">0{index+1}</p><h2>{section.title}</h2><p>{section.text}</p></article>)}</div><p className="policy-note">These pages describe general website information and should be reviewed against Ringstack’s actual processes and agreements before publication.</p></Section><CtaBand title="Need to ask us something?" intro="Send your question to the Ringstack team."/></>
}
