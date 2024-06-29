import Navbar from '@/screens/navbar/navbar'
import Hero from '../../screens/landingpage/hero'
import About from '../../screens/landingpage/about'
import Cards from '../../screens/landingpage/cards'
import Faqs from '../../screens/landingpage/faq'
import Blog from '../../screens/landingpage/blog'
import React from 'react'

export default function Home() {
    return (
        <div>
            <Navbar />
        <Hero/>
        <Cards/>
        <About/>
        <Faqs/>
        <Blog/>
        </div>
    )
}

