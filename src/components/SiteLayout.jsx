import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const pageMetadata = {
  '/': {
    title: 'Ringstack | PPC, Meta Ads, Google Ads & Lead Generation',
    description: 'Grow with focused PPC, Meta Ads, Google Ads, and lead generation campaigns built around your business goals.',
  },
  '/services': {
    title: 'PPC & Paid Advertising Services | Ringstack',
    description: 'Explore Ringstack campaign management for PPC, Meta Ads, Google Ads, and lead generation.',
  },
  '/about': {
    title: 'About Ringstack | Practical business support',
    description: 'Meet the Ringstack team. We help businesses with leads, websites, and IT.',
  },
  '/contact': {
    title: 'Contact Ringstack | Talk to our team',
    description: 'Contact Ringstack for help with leads, websites, or IT.',
  },
  '/blog': {
    title: 'Ringstack Blogs | Simple business tips',
    description: 'Simple advice on leads, websites, and IT from the Ringstack team.',
  },
}

function SiteLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const metadata = pageMetadata[location.pathname] || (location.pathname.startsWith('/blog/')
      ? {
          title: 'Ringstack Blogs | Simple business tips',
          description: 'Simple advice on leads, websites, and IT from the Ringstack team.',
        }
      : {
      title: 'Page not found | Ringstack',
      description: 'The Ringstack page you are looking for could not be found.',
      })
    document.title = metadata.title
    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) descriptionTag.setAttribute('content', metadata.description)
  }, [location.pathname])

  return (
    <>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default SiteLayout
