import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const campaigns = [
  {
    label: '01 / Paid search',
    title: <>Make every click <em>count.</em></>,
    description: 'Smarter PPC campaigns that put your business in front of people already looking for what you do.',
  },
  {
    label: '02 / Meta Ads',
    title: <>Show up where your customers <em>scroll.</em></>,
    description: 'Creative-led Meta campaigns built to earn attention, start conversations, and bring in new enquiries.',
  },
  {
    label: '03 / Google Ads',
    title: <>Be there when intent <em>is high.</em></>,
    description: 'Reach the right searches with focused Google Ads, thoughtful landing pages, and clear tracking.',
  },
  {
    label: '04 / Lead generation',
    title: <>Turn more interest into <em>leads.</em></>,
    description: 'A joined-up approach to attracting, qualifying, and measuring leads from first click to follow-up.',
  },
]

function AgencyHero() {
  const sectionRef = useRef(null)
  const [activeCampaign, setActiveCampaign] = useState(0)

  useEffect(() => {
    let animationFrame = 0

    function updateCampaign() {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        const section = sectionRef.current
        if (!section) return

        const scrollRange = section.offsetHeight - window.innerHeight
        const progress = scrollRange > 0
          ? Math.min(1, Math.max(0, -section.getBoundingClientRect().top / scrollRange))
          : 0
        const nextCampaign = Math.min(campaigns.length - 1, Math.floor(progress * campaigns.length))
        setActiveCampaign(nextCampaign)
      })
    }

    updateCampaign()
    window.addEventListener('scroll', updateCampaign, { passive: true })
    window.addEventListener('resize', updateCampaign)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', updateCampaign)
      window.removeEventListener('resize', updateCampaign)
    }
  }, [])

  function scrollToCampaign(index) {
    const section = sectionRef.current
    if (!section) return

    const scrollRange = section.offsetHeight - window.innerHeight
    window.scrollTo({
      top: window.scrollY + section.getBoundingClientRect().top + scrollRange * index / campaigns.length,
      behavior: 'smooth',
    })
  }

  return (
    <section className="scroll-hero" ref={sectionRef} aria-label="Performance marketing services">
      <div className="scroll-hero-sticky">
        <div className="scroll-hero-video-wrap" aria-hidden="true">
          <video
            className="scroll-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=85"
          >
            <source src="https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="scroll-hero-shade" aria-hidden="true" />

        <div className="scroll-hero-content page-container">
          <div className="scroll-hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Performance marketing for ambitious businesses</p>
            <div className="scroll-hero-slides">
              {campaigns.map((campaign, index) => {
                const Heading = index === activeCampaign ? 'h1' : 'h2'

                return (
                  <article
                    className={`scroll-hero-slide${index === activeCampaign ? ' is-active' : ''}`}
                    key={campaign.label}
                    aria-hidden={index !== activeCampaign}
                  >
                    <p className="scroll-hero-kicker">{campaign.label}</p>
                    <Heading>{campaign.title}</Heading>
                    <p className="scroll-hero-description">{campaign.description}</p>
                    <div className="hero-actions">
                      <Link className="button button-lime" to="/contact">Plan your next campaign <span aria-hidden="true">↗</span></Link>
                      <a className="agency-secondary-link" href="#growth-services">Explore our services <span aria-hidden="true">↓</span></a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="scroll-hero-dashboard" aria-label="A joined-up campaign approach">
            <div className="scroll-dashboard-top"><span className="scroll-dashboard-indicator" /> YOUR GROWTH CHANNELS <span>01—04</span></div>
            <div className="scroll-dashboard-visual" aria-hidden="true">
              <span className="scroll-dashboard-orbit scroll-dashboard-orbit-one" />
              <span className="scroll-dashboard-orbit scroll-dashboard-orbit-two" />
              <span className="scroll-dashboard-center">R<span>.</span></span>
              <span className="scroll-dashboard-node scroll-dashboard-node-search">Search</span>
              <span className="scroll-dashboard-node scroll-dashboard-node-social">Social</span>
              <span className="scroll-dashboard-node scroll-dashboard-node-leads">Leads</span>
            </div>
            <div className="scroll-dashboard-footer"><span>From first click</span><span aria-hidden="true">→</span><span>to real conversation</span></div>
          </div>
        </div>

        <div className="scroll-hero-bottom page-container">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-hero-progress" aria-label="Campaign topics">
            {campaigns.map((campaign, index) => (
              <button
                className={index === activeCampaign ? 'is-active' : ''}
                type="button"
                key={campaign.label}
                aria-label={`Go to ${campaign.label}`}
                aria-current={index === activeCampaign ? 'step' : undefined}
                onClick={() => scrollToCampaign(index)}
              />
            ))}
          </div>
          <span>01—04 <span aria-hidden="true">↓</span></span>
        </div>
      </div>
    </section>
  )
}

export default AgencyHero
