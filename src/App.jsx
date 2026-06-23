import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/common/Navigation'
import Footer from './components/common/Footer'
import BackToTop from './components/common/BackToTop'
import Home from './pages/Home'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

export default function App() {
  // The admin panel is a standalone tool — hide the marketing chrome there.
  const isAdmin = useLocation().pathname.startsWith('/admin')

  return (
    <>
      {!isAdmin && <Navigation />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
      {!isAdmin && <BackToTop />}
    </>
  )
}
