import React from 'react'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import RecommendedCourses from './Components/RecommendedCourses'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection/>
      <RecommendedCourses/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App