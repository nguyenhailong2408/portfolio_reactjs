import { useEffect, useMemo, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import NavBar from './components/navbar'
import ScrollToTop from './components/backTop/backToTop'
import Home from './components/section/home/home'
import AboutMe from './components/section/about/about'
import Projects from './components/section/project/project'
import Skills from './components/section/skill'
import Contact from './components/section/contact/contact'
// import CVViewer from './components/PDFviewer'
import cvData from './mockData/mockData'
import BackgroundMotion from './components/backgroundMotion'
import Resume from './components/section/resume/resume'
import Experience from './components/section/experience/experience'
import FallingStars from './components/fallingStars/FallingStars'
import ButtonSetTheme from './components/button/btnSetTheme'
import ButtonChangeLangague from './components/button/btnChangeLangague'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const sections = ['home', 'about', 'skill', 'experience', 'project', 'contact', 'resume']
  const [bgKey, setBgKey] = useState('home')
  const memoizedResume = useMemo(() => <Resume elementID={'resume'} isMobile={isMobile}/>, [])

  useEffect(() => {
    // AOS.init({
    //   duration: 800,
    //   once: true,
    // })

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      const currentScroll = window.scrollY
      const buffer = isMobile ? 10 : -10

      const visibleSection = [...sections].reverse().find((id) => {
        const el = document.getElementById(id)
        if (!el) return false

        const top = el.offsetTop
        const height = el.offsetHeight

        return currentScroll + buffer >= top && currentScroll + buffer < top + height
      })

      if (visibleSection) {
        setActiveSection(visibleSection)
      }
      setNavOpen(false)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile])

  useEffect(() => {
    // Set initial active section based on scroll position
    if (sections.includes(activeSection)) {
      setBgKey(activeSection)
    }
  }, [activeSection])

  function smoothScrollTo(targetY, duration = 500, callback) {
    const startY = window.scrollY
    const distance = targetY - startY
    const startTime = performance.now()

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    }

    function animate(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeInOutQuad(progress)

      window.scrollTo({
        top: startY + distance * easedProgress,
        behavior: 'auto',
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        callback && callback()
      }
    }

    requestAnimationFrame(animate)
  }

  const handleNavClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = isMobile ? 10 : -10
      const targetY = el.offsetTop - offset

      smoothScrollTo(targetY, 600, () => {
        setActiveSection(id)
        setNavOpen(false)
      })
    }
  }

  return (
    <>
      <div
        className={'relative z-10 bg-white text-black dark:bg-[#151515] dark:text-white flex min-h-screen font-lexend '}
      >
        {' '}
        {/* <-- Đã thay đổi ở đây */}
        <BackgroundMotion activeBg={bgKey} darkMode={darkMode} />
        <FallingStars numberOfStars={50} darkMode={darkMode} />
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activeSection={activeSection}
          isMobile={isMobile}
          handleNavClick={handleNavClick}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
        ></NavBar>
        <main className='md:ml-80 w-full  min-h-screen'>
          <Home handleNavClick={handleNavClick} elementID={'home'} />
          <AboutMe data={cvData} elementID={'about'} darkMode={darkMode} handleNavClick={handleNavClick}/>
          <Experience elementID={'experience'} />
          <Projects elementID={'project'} />
          <Skills elementID={'skill'} />
          {/* <Contact elementID={'contact'} /> */}
          {memoizedResume}
          {/* <Resume elementID={'resume'} isMobile={isMobile}/> */}
          <footer className='text-center mt-10 text-sm text-gray-500'>
            &copy; 2025 Nguyen Hai Long. All rights reserved.
          </footer>
        </main>
        <ButtonChangeLangague />
        <ButtonSetTheme darkMode={darkMode} setDarkMode={setDarkMode} />
        <ScrollToTop />
      </div>
    </>
  )
}
