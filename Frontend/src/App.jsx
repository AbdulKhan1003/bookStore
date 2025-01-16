import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import { Route, Routes, Navigate   } from 'react-router-dom'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Test from './components/Test'
import { useAuth } from './context/AuthProvider'


function App() {
    const [authUser] = useAuth()
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />: <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
