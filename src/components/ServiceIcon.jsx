function ServiceIcon({ type }) {
  const iconPaths = {
    phone: (
      <>
        <path d="M7.5 3.5h9A2.5 2.5 0 0 1 19 6v12a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 18V6a2.5 2.5 0 0 1 2.5-2.5Z" />
        <path d="M9 6.5h6M10 17.5h4" />
      </>
    ),
    web: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01M7 13h4M7 16h7" />
      </>
    ),
    infrastructure: (
      <>
        <rect x="4" y="3" width="16" height="7" rx="2" />
        <rect x="4" y="14" width="16" height="7" rx="2" />
        <path d="M8 6.5h.01M8 17.5h.01M12 6.5h4M12 17.5h4" />
      </>
    ),
    ppc: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    meta: (
      <>
        <path d="M3.5 15.5c0-4.2 2.1-8 4.3-8s3.5 8.9 5.7 8.9 4.4-3.8 4.4-8.1" />
        <path d="M20.5 8.5c0 4.2-2.1 8-4.3 8s-3.5-8.9-5.7-8.9-4.4 3.8-4.4 8.1" />
      </>
    ),
    google: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 4.5 4.5M8.5 10.8h4.6" />
      </>
    ),
    leads: (
      <>
        <path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 20V4.5a1 1 0 0 1 1-1Z" />
        <path d="M14 3.5V8h4M9 12h6M9 15h4" />
      </>
    ),
  }

  return (
    <span className="service-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {iconPaths[type]}
      </svg>
    </span>
  )
}

export default ServiceIcon
