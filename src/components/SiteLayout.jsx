import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { BRAND, CONTACT_EMAIL, industries, pages } from '../data/siteContent.js'
import blogPosts from '../data/blogPosts.js'

const baseMetadata = {
  '/': ['Pay-per-call and lead generation | Ringstack', 'UK pay-per-call and lead generation connecting advertisers and publishers around relevant calls and enquiries.'],
  '/industries': ['Industries | Ringstack', 'Explore Ringstack pay-per-call and lead generation campaigns across six UK service industries.'],
  '/technology': [`${pages.technology.title} | ${BRAND}`, pages.technology.description],
  '/advertisers': [`${pages.advertisers.title} | ${BRAND}`, pages.advertisers.description],
  '/publishers': [`${pages.publishers.title} | ${BRAND}`, pages.publishers.description],
  '/about': [`${pages.about.title} | ${BRAND}`, pages.about.description],
  '/resources': ['Resources | Ringstack', 'Guidance for advertisers and publishers working with performance campaigns.'],
  '/blog': ['Ringstack insights | Calls, leads and campaigns', 'Practical notes for advertisers and publishers building performance partnerships.'],
  '/contact': ['Contact Ringstack | Discuss calls and leads', `Contact Ringstack at ${CONTACT_EMAIL} about calls, leads or publisher opportunities.`],
  '/privacy': ['Privacy information | Ringstack', 'Read general information about how Ringstack handles website enquiries and personal information.'],
  '/terms': ['Website terms | Ringstack', 'Read the general terms for using the Ringstack website.'],
}

function getMetadata(pathname) {
  if (baseMetadata[pathname]) return baseMetadata[pathname]
  const industryMatch = pathname.match(/^\/industries\/([^/]+)$/)
  if (industryMatch) {
    const industry = industries.find((item) => item.slug === industryMatch[1])
    if (industry) return [`${industry.name} calls and lead generation | ${BRAND}`, `${industry.summary} Explore Ringstack campaign planning for ${industry.name.toLowerCase()}.`]
  }
  const postMatch = pathname.match(/^\/blog\/([^/]+)$/)
  if (postMatch) {
    const post = blogPosts.find((item) => item.slug === postMatch[1])
    if (post) return [`${post.title} | Ringstack`, post.excerpt]
  }
  return ['Page not found | Ringstack', 'The Ringstack page you are looking for could not be found.']
}

export default function SiteLayout() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const [title,description] = getMetadata(location.pathname)
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content',description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content',title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content',description)
    const canonicalUrl = new URL(location.pathname,window.location.origin).href
    document.querySelector('link[rel="canonical"]')?.setAttribute('href',canonicalUrl)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content',canonicalUrl)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content',title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content',description)
    let jsonld = document.querySelector('script[data-ringstack-organization]')
    if (!jsonld) { jsonld=document.createElement('script'); jsonld.type='application/ld+json'; jsonld.dataset.ringstackOrganization='true'; document.head.append(jsonld) }
    jsonld.textContent=JSON.stringify({'@context':'https://schema.org','@type':'Organization',name:BRAND,url:window.location.origin,email:CONTACT_EMAIL})
  },[location.pathname])
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header/><main id="main-content"><Outlet/></main><Footer/></>
}
