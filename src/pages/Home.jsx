import { Link } from 'react-router-dom'
import AgencyHero from '../components/AgencyHero.jsx'
import BlogCard from '../components/BlogCard.jsx'
import FaqSection from '../components/FaqSection.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import Testimonials from '../components/Testimonials.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import blogPosts from '../data/blogPosts.js'

const services = [
  {
    type: 'ppc',
    number: '01',
    title: 'PPC campaign management',
    description: 'Build paid search campaigns around the customers and outcomes that matter.',
  },
  {
    type: 'meta',
    number: '02',
    title: 'Meta Ads',
    description: 'Reach new audiences on Facebook and Instagram with creative that gets noticed.',
  },
  {
    type: 'google',
    number: '03',
    title: 'Google Ads',
    description: 'Capture high-intent searches with focused campaigns and useful landing pages.',
  },
  {
    type: 'leads',
    number: '04',
    title: 'Lead generation',
    description: 'Turn more of your marketing attention into qualified enquiries for your team.',
  },
]

function Home() {
  return (
    <>
      <AgencyHero />

      <section className="home-services section-space" id="growth-services">
        <div className="page-container">
          <div className="home-section-heading">
            <SectionHeading eyebrow="What we do" title="Paid media with a clear purpose." />
            <Link className="home-section-link" to="/services">Explore campaign services <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="card-topline"><ServiceIcon type={service.type} /><span>{service.number}</span></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link className="card-link" to="/services">Explore service <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
          <div className="home-services-foot"><span>One connected plan across paid search, paid social, and lead generation.</span><Link to="/contact">Talk about your goals <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="home-journal section-space">
        <div className="page-container">
          <div className="home-section-heading journal-section-heading">
            <SectionHeading eyebrow="From the blog" title="Ideas for better campaigns." />
            <Link className="home-section-link" to="/blog">More marketing insights <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="blog-grid">{blogPosts.slice(0, 3).map((post) => <BlogCard key={post.slug} post={post} />)}</div>
        </div>
      </section>

      <Testimonials />
      <FaqSection />
      <GetInTouch />
    </>
  )
}

export default Home
