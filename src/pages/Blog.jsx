import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import blogPosts from '../data/blogPosts.js'

function Blog() {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="page-container blog-hero-inner">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Ringstack blogs</p>
            <h1>Ideas for <em>growing your business.</em></h1>
            <p>Simple advice on leads, websites, and IT.</p>
          </div>
          <div className="blog-hero-note"><span className="blog-note-mark">R<span>.</span></span><span>Practical perspective.<br />No noise.</span></div>
        </div>
      </section>

      <section className="blog-listing section-space page-container">
        <SectionHeading eyebrow="From our team" title="Latest posts" />
        <div className="blog-grid">
          {blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </section>

      <section className="blog-subscribe page-container">
        <div><p className="eyebrow">Have a question?</p><h2>Let’s talk.</h2><p>Tell us what your business needs.</p></div>
        <Link className="button button-lime" to="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
      </section>
    </div>
  )
}

export default Blog
