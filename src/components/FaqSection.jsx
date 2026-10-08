import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading.jsx'

const questions = [
  {
    question: 'Which advertising platforms do you manage?',
    answer: 'We focus on PPC, Google Ads, and Meta Ads, with channel recommendations based on your audience and goals.',
  },
  {
    question: 'Can you work with our existing ad accounts?',
    answer: 'Yes. We can review your current setup and agree the right next steps before making changes.',
  },
  {
    question: 'How do you measure lead generation?',
    answer: 'We agree what counts as a useful enquiry, then track campaign activity against those outcomes wherever the required data is available.',
  },
  {
    question: 'How much should I spend on ads?',
    answer: 'There is no one-size-fits-all budget. We will discuss your goals, market, and testing needs before agreeing a suitable spend.',
  },
  {
    question: 'Can I start with one campaign?',
    answer: 'Absolutely. You can start with one platform or campaign and expand when it makes sense for your business.',
  },
]

function FaqSection() {
  return (
    <section className="faq-section section-space">
      <div className="page-container faq-layout">
        <div className="faq-intro">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <Link className="faq-contact-link" to="/contact">Ask us directly <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => (
            <details className="faq-item" key={item.question} open={index === 0}>
              <summary><span>{item.question}</span><span className="faq-toggle" aria-hidden="true" /></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
