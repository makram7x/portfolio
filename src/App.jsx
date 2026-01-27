import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { GradientDefs } from './components/Icons'
import GrainOverlay from './components/GrainOverlay'
import FloatingElements from './components/FloatingElements'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Education from './pages/Education'
import MyShop from './pages/MyShop'
import Contact from './pages/Contact'

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <GradientDefs />
      <CustomCursor />
      <GrainOverlay />
      <FloatingElements />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/my-shop" element={<MyShop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
