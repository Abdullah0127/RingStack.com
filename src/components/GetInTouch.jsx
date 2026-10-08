import { Link } from 'react-router-dom'

function GetInTouch() {
  return (
    <section className="get-in-touch section-space">
      <div className="page-container get-in-touch-inner">
        <div className="get-in-touch-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Get in touch</p>
          <h2>Ready to grow your <em>pipeline?</em></h2>
          <p>Tell us about your goals for PPC, paid social, or lead generation and we’ll help you find a clear next step.</p>
          <Link className="button button-lime" to="/contact">Talk about your campaigns <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="get-in-touch-details">
          <span className="contact-detail-label">Direct line</span>
          <a href="mailto:hello@ringstack.co.uk">hello@ringstack.co.uk</a>
          <a href="tel:07737139740">07737139740</a>
          <span className="contact-detail-label contact-detail-location">Based in London, UK<br />Working wherever you are</span>
          <Link className="get-in-touch-blog" to="/blog">Read marketing insights <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
