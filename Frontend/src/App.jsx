import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import { Route, Routes, Navigate   } from 'react-router-dom'
import Signup from './components/Signup'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
