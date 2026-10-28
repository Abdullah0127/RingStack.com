import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const ContentPage = lazy(() => import('./pages/ContentPage.jsx'))
const IndustryPage = lazy(() => import('./pages/Industries.jsx'))
const IndustriesIndexPage = lazy(() => import('./pages/Industries.jsx').then((module) => ({ default: module.IndustriesIndexPage })))
const Services = lazy(() => import('./pages/Services.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))

function RouteFallback() { return <div className="container section" role="status">Loading page…</div> }

export default function App() {
  return <Suspense fallback={<RouteFallback/>}><Routes><Route element={<SiteLayout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/industries" element={<IndustriesIndexPage/>}/>
    <Route path="/industries/:slug" element={<IndustryPage/>}/>
    <Route path="/technology" element={<ContentPage/>}/>
    <Route path="/advertisers" element={<ContentPage/>}/>
    <Route path="/publishers" element={<ContentPage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/resources" element={<Blog/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/blog/:slug" element={<BlogPost/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Route></Routes></Suspense>
}
