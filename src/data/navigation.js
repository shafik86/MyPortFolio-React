// Section anchors used by the navbar, footer and scroll-spy.
//
// `primaryLinks` show directly in the navbar; `moreLinks` are grouped under a
// "More ▾" dropdown (each with a Bootstrap icon for a nicer UX). `navLinks`
// is the full ordered list (used by scroll-spy and the mobile menu).
export const primaryLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'contact', label: 'Contact' },
]

export const moreLinks = [
  { id: 'leadership', label: 'Leadership', icon: 'bi-compass' },
  { id: 'companies', label: 'Companies', icon: 'bi-building' },
  { id: 'clients', label: 'Clients', icon: 'bi-people' },
  { id: 'skills', label: 'Skills', icon: 'bi-stars' },
  { id: 'experience', label: 'Experience', icon: 'bi-briefcase' },
  { id: 'testimonials', label: 'Reviews', icon: 'bi-chat-quote' },
]

// Full ordered list — keep in render order for scroll-spy.
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'companies', label: 'Companies' },
  { id: 'products', label: 'Products' },
  { id: 'clients', label: 'Clients' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
]
