import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main page-container footer-two">
        <div className="footer-brand-block">
          <Link className="brand brand-footer" to="/" aria-label="Ringstack home">
            <span className="brand-symbol" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="brand-name">ringstack<span>.</span></span>
          </Link>
          <span className="footer-kicker">PERFORMANCE MARKETING · LONDON, UK</span>
          <p>PPC, paid social, and lead generation for growing businesses.</p>
          <a className="footer-email" href="mailto:hello@ringstack.co.uk">hello@ringstack.co.uk</a>
        </div>
        <div className="footer-links">
          <h2>Explore</h2>
          <Link to="/services">Our services</Link>
          <Link to="/about">About Ringstack</Link>
          <Link to="/blog">Blogs</Link>
          <Link to="/contact">Get in touch</Link>
        </div>
        <div className="footer-links">
          <h2>What we do</h2>
          <Link to="/services">PPC campaign management</Link>
          <Link to="/services">Meta Ads</Link>
          <Link to="/services">Google Ads</Link>
          <Link to="/services">Lead generation</Link>
          <a href="tel:07737139740">07737139740</a>
        </div>
        <div className="footer-callout">
          <span>Have a question?</span>
          <Link to="/contact">Talk to our team <span aria-hidden="true">↗</span></Link>
          <a href="mailto:hello@ringstack.co.uk">hello@ringstack.co.uk</a>
          <span>Weekdays · 09:00–18:00 UK time</span>
        </div>
      </div>
      <div className="footer-bottom page-container">
        <span>© 2026 Ringstack Ltd. Registered in England &amp; Wales.</span>
        <div><span>London, UK</span><span>Built for what’s next.</span></div>
      </div>
    </footer>
  )
}

export default Footer
