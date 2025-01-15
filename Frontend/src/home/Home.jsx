import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Freebok from '../components/Freebok'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
    useEffect(()=>{
        window.location.href},[])
    return (
        <>
            <Navbar />
            <Banner />
            <Freebok />
            <Footer />
        </>
        )
}

export default Home
