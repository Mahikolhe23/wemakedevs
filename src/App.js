import React from 'react'
import './App.css'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Courses from './components/Courses.js'
import Event from './components/Event.js'
import Mentorship from './components/Mentorship.js'
import Blog from './components/Blog.js'

const App = () => {
  return (
    <div className="main">
    <About />
    <Courses />
    <Event />
    <Mentorship />
    <Blog />
    <Footer />
    </div>
  )
}

export default App