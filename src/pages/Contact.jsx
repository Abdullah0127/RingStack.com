import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ADDRESS, CONTACT_EMAIL, LOCATION, PHONE, PHONE_TEL } from '../data/siteContent.js'

function ContactMethod({ icon, label, children }) {
  return <div className="contact-method"><span className="contact-method-icon" aria-hidden="true">{icon}</span><div className="contact-method-copy"><span className="contact-method-label">{label}</span>{children}</div></div>
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState({ type: '', message: '' })
  const defaultType = searchParams.get('type') === 'publisher' ? 'Publisher' : 'Advertiser'

  function submit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const body = [`Name: ${data.get('name')}`, `Email: ${data.get('email')}`, `Phone: ${data.get('phone') || 'Not provided'}`, `I am a: ${data.get('type')}`, '', String(data.get('message'))].join('\n')
    try {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Ringstack enquiry from ${data.get('name')}`)}&body=${encodeURIComponent(body)}`
      setStatus({ type: 'success', message: `Your email draft is ready to review. If your email app does not open, email ${CONTACT_EMAIL}.` })
    } catch {
      setStatus({ type: 'error', message: `We could not open an email draft. Please email ${CONTACT_EMAIL} directly.` })
    }
  }

  return <>
    <header className="page-hero"><div className="container"><p className="section-kicker">Contact Ringstack</p><h1>Let’s talk calls and leads.</h1><p>Tell us whether you’re an advertiser, publisher or agent, and what you want to achieve.</p></div></header>
    <section className="section"><div className="container contact-grid">
      <form className="form" onSubmit={submit}>
        <h2>Send an enquiry</h2><p>Required fields are marked with an asterisk. Your email app will open so you can review and send the message.</p>
        <label htmlFor="contact-name">Full name *</label><input id="contact-name" name="name" autoComplete="name" required/>
        <label htmlFor="contact-email">Work email *</label><input id="contact-email" name="email" type="email" autoComplete="email" required/>
        <label htmlFor="contact-phone">Telephone</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel"/>
        <label htmlFor="contact-type">I am a</label><select id="contact-type" name="type" defaultValue={defaultType}><option>Advertiser</option><option>Publisher</option><option>Individual agent</option><option>Other</option></select>
        <label htmlFor="contact-message">How can we help? *</label><textarea id="contact-message" name="message" rows="5" required/>
        <button className="button button-primary" type="submit">Prepare email</button>
        {status.message && <p className={`form-note form-note--${status.type}`} role="status" aria-live="polite">{status.message}</p>}
      </form>
      <aside className="contact-card">
        <p className="section-kicker">Direct contact</p><h2>Reach our team</h2><p className="contact-card-intro">Choose the way that works best for you.</p>
        <div className="contact-details">
          <ContactMethod icon="@" label="Email"><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></ContactMethod>
          {PHONE.verified && PHONE.value && <ContactMethod icon="☎" label="Telephone"><a href={`tel:${PHONE_TEL}`}>{PHONE.value}</a></ContactMethod>}
          {ADDRESS.verified && ADDRESS.value && <ContactMethod icon="⌂" label="Office"><address>{ADDRESS.value.map((line) => <span key={line}>{line}</span>)}</address></ContactMethod>}
          {LOCATION.verified && LOCATION.value && <ContactMethod icon="⌖" label={LOCATION.value}><p>{LOCATION.detail}</p></ContactMethod>}
        </div>
      </aside>
    </div></section>
    <section className="section section--compact"><div className="container cta-band"><div><p className="section-kicker">Prefer to email?</p><h2>Write to the Ringstack team.</h2><p>Use your email app to send a message directly to us.</p></div><a className="button button-on-inverse" href={`mailto:${CONTACT_EMAIL}`}>Email Ringstack</a></div></section>
  </>
}
