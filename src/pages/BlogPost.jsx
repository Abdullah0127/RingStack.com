import { Link, useParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard.jsx'
import blogPosts from '../data/blogPosts.js'

function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((article) => article.slug === slug)

  if (!post) {
    return (
      <section className="not-found page-container">
        <p className="eyebrow">Article not found</p>
        <h1>This story isn’t here.</h1>
        <p>It may have moved, or the address might be incorrect.</p>
        <Link className="button button-lime" to="/blog">Browse blogs <span aria-hidden="true">↗</span></Link>
      </section>
    )
  }

  const related = blogPosts.filter((article) => article.slug !== post.slug).slice(0, 2)

  return (
    <article className="article-page">
      <header className="article-header-shell">
        <div className="article-header page-container">
          <Link className="article-back" to="/blog"><span aria-hidden="true">←</span> Back to blogs</Link>
          <div className="blog-meta"><span>{post.category}</span><time dateTime={post.date}>{post.dateLabel}</time><span>{post.readTime}</span></div>
          <h1>{post.title}</h1>
          <p className="article-deck">{post.excerpt}</p>
        </div>
      </header>

      <div className="article-layout page-container">
        <aside className="article-aside"><span>IN THIS ARTICLE</span>{post.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`}>{section.heading}</a>)}</aside>
        <div className="article-body">
          <p className="article-intro">{post.intro}</p>
          {post.sections.map((section, index) => (
            <section className="article-section" id={`section-${index + 1}`} key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </section>
          ))}
          <div className="article-author"><span className="author-mark">R<span>.</span></span><span><strong>Ringstack</strong><small>Human-scale technology · London, UK</small></span></div>
        </div>
      </div>

      <section className="related-articles section-space">
        <div className="page-container">
          <div className="related-heading"><div><p className="eyebrow">Keep exploring</p><h2>More blogs</h2></div><Link className="text-link" to="/blog">All blogs <span aria-hidden="true">→</span></Link></div>
          <div className="blog-grid">{related.map((article) => <BlogCard key={article.slug} post={article} />)}</div>
        </div>
      </section>
    </article>
  )
}

export default BlogPost
