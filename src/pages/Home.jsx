import React from 'react';
import Banner from '../components/Banner/Banner';
import About from '../components/About';
import Features from '../components/Features';
import ChooseUs from '../components/ChooseUs';
import Prices from '../components/Prices';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <>
            <Banner/>
            <Features/>
            <About/>
            <ChooseUs/>
            <Prices/>
            <Testimonial/>
            <Newsletter/>
        </>
    )
}

export default Home