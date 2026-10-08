import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'

function Contact() {
  const [emailAppOpened, setEmailAppOpened] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = `Website inquiry from ${formData.get('name')}`
    const body = [
      `Name: ${formData.get('name')}`,
      `Work email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      '',
      'How can we help?',
      formData.get('message'),
    ].join('\n')
    const mailto = `mailto:hello@ringstack.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setEmailAppOpened(true)
  }

  return (
    <>
      <section className="contact-hero">
        <div className="page-container contact-hero-inner">
          <div className="contact-intro">
            <p className="eyebrow"><span className="eyebrow-dot" /> Get in touch</p>
            <h1>Let’s talk about <em>your next campaign.</em></h1>
            <p>Tell us what you want to achieve with PPC, Meta Ads, Google Ads, or lead generation.</p>
            <p className="response-note"><span className="proof-dot" /> We usually reply within one business day.</p>
            <div className="contact-direct">
              <span>Prefer email or phone?</span>
              <a href="mailto:hello@ringstack.co.uk">hello@ringstack.co.uk</a>
              <a href="tel:07737139740">07737139740</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading"><h2>Send us a message</h2><p>Fields marked * are required.</p></div>
            <label htmlFor="contact-name">Full name <span>*</span></label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Jane Doe" required />
            <label htmlFor="contact-email">Work email <span>*</span></label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="hello@ringstack.com" required />
            <label htmlFor="contact-phone">Phone number</label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="07737139740" />
            <label htmlFor="contact-message">Your message <span>*</span></label>
            <textarea id="contact-message" name="message" rows="4" placeholder="How can we help?" required />
            <button className="button button-dark form-submit" type="submit">Send message <span aria-hidden="true">↗</span></button>
            {emailAppOpened && <p className="form-note" role="status">Your email app should open with your inquiry ready to send. If it doesn’t, email us at <a href="mailto:hello@ringstack.co.uk">hello@ringstack.co.uk</a>.</p>}
            <p className="form-privacy">Your email app will open so you can review and send your message.</p>
          </form>
        </div>
      </section>

      <section className="contact-details section-space">
        <div className="page-container">
          <SectionHeading eyebrow="Contact details" title="We’re here to help" />
          <div className="contact-detail-grid">
            <article><span className="detail-icon">⌖</span><h3>London, UK</h3><p>Working across the UK and beyond</p></article>
            <article><span className="detail-icon">▦</span><h3>Office</h3><p>Office 7641, 58 Peregrine Road<br />Hainault, Ilford, Essex<br />IG6 3SZ</p></article>
            <article><span className="detail-icon">ARIANT</span><h3>Weekdays</h3><p>09:00–18:00 UK time</p></article>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
