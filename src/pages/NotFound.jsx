import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="not-found page-container">
      <p className="eyebrow">404 · Page not found</p>
      <h1>Looks like this page took a different route.</h1>
      <p>The page you’re looking for may have moved, or the address may be incorrect.</p>
      <Link className="button button-dark" to="/">Back to home <span aria-hidden="true">↗</span></Link>
    </section>
  )
}

export default NotFound
