// import { useState } from 'react'
import './App.css'
import AboutMe from './components/about'
import ScrollToTop from './components/backTop/backToTop'
import Experience from './components/experience'
import Header from './components/header'
import Skills from './components/skill'

function App() {
  return (
    // <div>
    //   <section>Portfolio1</section>
    //   <section>Portfolio2</section>
    //   <section>Portfolio3</section>
    //   <section>Portfolio4</section>
    //   <section>Portfolio5</section>
    //   <section>Portfolio6</section>
    //   <section>Portfolio7</section>
    //   <section>Portfolio8</section>
    // </div>
    <>
      <Header />
      <AboutMe elementID={'ABOUT ME'} />
      <Skills elementID={'SKILLS'} />
      <Experience elementID={'EXPERIENCE'} />

      <ScrollToTop />
    </>
  )
}

export default App
