import { useState } from 'react'

const testimonials = [
  {
    quote: 'The team helped us get clear on our audience and what we wanted our PPC campaigns to achieve.',
    name: 'Sample client feedback',
    role: 'PPC strategy · Example content',
  },
  {
    quote: 'Having our Google and Meta campaigns considered together made the plan easier to understand.',
    name: 'Sample client feedback',
    role: 'Paid media · Example content',
  },
  {
    quote: 'The reporting gave us a better view of incoming enquiries and what to improve next.',
    name: 'Sample client feedback',
    role: 'Lead generation · Example content',
  },
]

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  function moveCard(direction) {
    setActiveIndex((index) => (index + direction + testimonials.length) % testimonials.length)
  }

  const orderedTestimonials = testimonials.map((_, index) => (
    testimonials[(index + activeIndex) % testimonials.length]
  ))

  return (
    <section className="testimonials-section section-space">
      <div className="page-container testimonials-layout">
        <div className="testimonials-copy">
          <p className="eyebrow">Client feedback</p>
          <h2>Campaigns built for real conversations</h2>
          <p>Example feedback showing the kind of clarity and collaboration we aim to bring to every campaign.</p>
        </div>
        <div className="testimonial-stack" aria-live="polite">
          {orderedTestimonials.map((testimonial, index) => (
            <article className={`testimonial-card${index === 0 ? ' is-current' : ''}`} key={testimonial.role}>
              <span className="testimonial-avatar" aria-hidden="true">R</span>
              <span className="testimonial-stars" aria-label="Sample five-star rating">★★★★★</span>
              <blockquote>{testimonial.quote}</blockquote>
              <div className="testimonial-card-bottom">
                <span><strong>{testimonial.name}</strong><small>{testimonial.role}</small></span>
              </div>
            </article>
          ))}
        </div>
        <div className="testimonial-controls" aria-label="Reorder testimonials">
          <button type="button" aria-label="Previous testimonials" onClick={() => moveCard(-1)}>←</button>
          <button type="button" aria-label="Next testimonials" onClick={() => moveCard(1)}>→</button>
        </div>
        <p className="testimonial-disclaimer">Sample testimonials for layout preview. Replace with approved client feedback before publishing.</p>
      </div>
    </section>
  )
}

export default Testimonials
