import { useState } from 'react'
import { Link } from 'react-router-dom'
import { audiences, features, integrations, stats } from '../data/siteContent.js'

export function Section({ eyebrow, title, intro, children, compact = false, id }) {
  return <section id={id} className={`section${compact ? ' section--compact' : ''}`}><div className="container">{(eyebrow || title || intro) && <div className="section-heading">{eyebrow && <p className="section-kicker">{eyebrow}</p>}{title && <h2>{title}</h2>}{intro && <p>{intro}</p>}</div>}{children}</div></section>
}

export function Card({ icon, title, children, href, linkLabel }) {
  return <article className="card">{icon && <span className="feature-icon" aria-hidden="true">{icon}</span>}<h3>{title}</h3>{children}{href && <Link className="card-link" to={href}>{linkLabel || 'Find out more'} <span aria-hidden="true">→</span></Link>}</article>
}

export function CtaBand({ title = 'Let’s talk about your next campaign.', intro = 'Tell us what you are looking to achieve and we’ll discuss a practical next step.', link = '/contact', label = 'Contact Ringstack' }) {
  return <section className="section section--compact"><div className="container"><div className="cta-band"><div><p className="section-kicker">Start a conversation</p><h2>{title}</h2><p>{intro}</p></div><Link className="button button-on-inverse" to={link}>{label}</Link></div></div></section>
}

export function QualifierFlow() {
  const [answers, setAnswers] = useState({ intent: 'buy', region: 'uk', team: 'individual' })
  const publisher = answers.intent === 'sell'
  return <div className="qualifier"><p className="section-kicker">Find your next step</p><h2>What brings you to Ringstack?</h2>
    <fieldset><legend>Are you buying or selling calls and leads?</legend><div className="choice-list">{[['buy','Buying'],['sell','Selling']].map(([value,label])=><label className="choice" key={value}><input type="radio" name="intent" value={value} checked={answers.intent===value} onChange={()=>setAnswers({...answers,intent:value})}/><span>{label}</span></label>)}</div></fieldset>
    <fieldset><legend>Where are you based?</legend><div className="choice-list">{[['uk','UK based'],['international','Outside the UK']].map(([value,label])=><label className="choice" key={value}><input type="radio" name="region" value={value} checked={answers.region===value} onChange={()=>setAnswers({...answers,region:value})}/><span>{label}</span></label>)}</div></fieldset>
    <fieldset><legend>How large is your team?</legend><div className="choice-list">{[['individual','Individual agent'],['small','2–10'],['larger','10+']].map(([value,label])=><label className="choice" key={value}><input type="radio" name="team" value={value} checked={answers.team===value} onChange={()=>setAnswers({...answers,team:value})}/><span>{label}</span></label>)}</div></fieldset>
    <p>{publisher ? 'Tell us about your traffic and the campaigns you are interested in.' : 'Share your goals, service area and the calls or enquiries your team can support.'}</p>
    <Link className="button button-primary" to={`/contact?type=${publisher?'publisher':'advertiser'}&region=${answers.region}&team=${answers.team}`}>{publisher ? 'Apply to become a publisher' : 'Talk to our sales team'}</Link>
  </div>
}

export function StatStrip() {
  const verified = stats.filter((stat) => stat.verified)
  if (!verified.length) return null
  return <section className="section--compact"><div className="container stats-strip">{verified.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>
}

function FeatureVisual({ icon, index }) {
  const path = index % 2 ? 'M24 70 C70 20 120 100 176 44 S260 82 316 20' : 'M35 34h90v90H35z M175 34h90v90h-90z M105 124v48h90v-48'
  return <div className="feature-visual" aria-hidden="true"><svg viewBox="0 0 340 210" fill="none"><path d={path} stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity=".45"/><circle cx="170" cy="104" r="42" fill="var(--accent)"/><text x="170" y="115" textAnchor="middle" fontSize="30" fontWeight="700" fill="var(--on-accent)">{icon}</text><circle cx="44" cy="170" r="7" fill="var(--accent-ink)"/><circle cx="296" cy="44" r="7" fill="var(--accent-ink)"/></svg></div>
}

export function FeatureRows() {
  return <div className="container">{features.map((feature,index)=><article className="feature-row" key={feature.title}><FeatureVisual icon={feature.icon} index={index}/><div className="feature-copy"><p className="section-kicker">0{index+1} / How we work</p><h3>{feature.title}</h3><p>{feature.description}</p></div></article>)}</div>
}

export function IntegrationStrip() {
  return <Section eyebrow="Fits your workflow" title="Integrates with the tools you use"><div className="integration-list">{integrations.map((tool)=><span className="tag" key={tool}>{tool}</span>)}</div></Section>
}

export function AudienceCards() {
  return <div className="three-grid">{audiences.map((item)=><article className="card audience-card" key={item.title}><span className="feature-icon" aria-hidden="true">{item.icon}</span><h3>{item.title}</h3><p>{item.description}</p><ul>{item.benefits.map((benefit)=><li key={benefit}>{benefit}</li>)}</ul><Link className="card-link" to={item.to}>{item.cta} <span aria-hidden="true">→</span></Link></article>)}</div>
}
