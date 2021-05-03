import React from 'react'
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Adds from './Adds/Adds';
import CardBox from './CardBox/index';
import Footer from './Footer/Footer'

function Home() {
    return (
        <div>
            <Header />
            <Navbar />
            <Adds />
            <CardBox />
            <Footer />
        </div>
    )
}

export default Home
