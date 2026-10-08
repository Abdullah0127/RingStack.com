import { Link } from 'react-router-dom'

function BlogCard({ post, featured = false }) {
  return (
    <article className={`blog-card${featured ? ' blog-card-featured' : ''}`}>
      <div className="blog-card-content">
        <div className="blog-meta"><span>{post.category}</span><span>{post.dateLabel} · {post.readTime}</span></div>
        <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <div className="blog-card-bottom">
          <span className="blog-card-accent" aria-hidden="true" />
          <Link className="blog-read-link" to={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>Read blog <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
