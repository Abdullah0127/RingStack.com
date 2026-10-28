import { Link } from 'react-router-dom'

export default function NotFound() {
  return <section className="container not-found"><p className="section-kicker">404 · Page not found</p><h1>We can’t find that page.</h1><p>Check the address or use one of these links to continue.</p><div className="home-hero-actions"><Link className="button button-primary" to="/">Back home</Link><Link className="button button-secondary" to="/contact">Contact Ringstack</Link></div></section>
}
