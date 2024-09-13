"use client"
import React from 'react';
import Footer from '../components/footer';
import About from './components/about';
import Mission from './components/mission';
import More from './components/more';
const Home = () => {
    return (
        <main>
            <About />
            <Mission />
            <More />
            <Footer/>
        </main>
    )   
}

export default Home;
