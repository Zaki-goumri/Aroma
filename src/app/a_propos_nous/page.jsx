import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import About from './components/about';
import Mission from './components/mission';
import More from './components/more';
const Home = () => {
    return (
        <main>
            <Header />
            <About />
            <Mission />
            <More />
            <Footer/>
        </main>
    )   
}

export default Home;