import { Link } from 'react-router-dom'
import { ADDRESS, BRAND, CONTACT_EMAIL, industries, LOCATION, navItems, OPENING_HOURS, PHONE, PHONE_TEL, SOCIAL_LINKS } from '../data/siteContent.js'

const advertiserLogin = import.meta.env.VITE_ADVERTISER_LOGIN_URL
const publisherLogin = import.meta.env.VITE_PUBLISHER_LOGIN_URL
const currentYear = new Date().getFullYear()

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div className="footer-brand"><Link to="/" className="brand"><span className="brand-mark" aria-hidden="true">R</span>{BRAND}</Link><p>A UK pay-per-call and lead generation partner for advertisers and publishers.</p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{SOCIAL_LINKS.length>0&&<ul className="footer-list" aria-label="Social media">{SOCIAL_LINKS.map((item)=><li key={item.label}><a href={item.url} target="_blank" rel="noreferrer">{item.label}</a></li>)}</ul>}</div>
    <div><h2>Industries</h2><ul className="footer-list">{industries.map((item)=><li key={item.slug}><Link to={`/industries/${item.slug}`}>{item.name}</Link></li>)}<li><Link to="/industries">All industries</Link></li></ul></div>
    <div><h2>Company</h2><ul className="footer-list">{navItems.map((item)=><li key={item.to}><Link to={item.to}>{item.label}</Link></li>)}<li><Link to="/privacy">Privacy</Link></li><li><Link to="/terms">Terms</Link></li><li><Link to="/contact">Contact</Link></li></ul></div>
    <div className="footer-contact"><h2>Contact</h2><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{PHONE.verified&&PHONE.value&&<a href={`tel:${PHONE_TEL}`}>{PHONE.value}</a>}{ADDRESS.verified&&ADDRESS.value&&<address>{ADDRESS.value.map((line,index)=><span key={line}>{line}{index<ADDRESS.value.length-1&&<br/>}</span>)}</address>}{LOCATION.verified&&LOCATION.value&&<p><strong>{LOCATION.value}</strong><br/>{LOCATION.detail}</p>}{OPENING_HOURS.verified&&OPENING_HOURS.value&&<p>{OPENING_HOURS.value}</p>}{advertiserLogin&&<a href={advertiserLogin} target="_blank" rel="noreferrer">Advertiser login</a>}{publisherLogin&&<a href={publisherLogin} target="_blank" rel="noreferrer">Publisher login</a>}</div>
  </div><div className="container footer-bottom">© {currentYear} {BRAND}</div></footer>
}
