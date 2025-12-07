import React from 'react';
import Hero from '../components/Hero'
import Stats from '../components/Stats';
import { useLoaderData } from 'react-router';
import TopRatedMovies from '../components/TopRatedMovies';
import LatestMovies from '../components/LatestMovies';
import GenreSection from '../components/GenreSection';
import About from '../components/About';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
    const movies = useLoaderData()
    // console.log(movies);
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <Hero />
            <Stats movies={movies} />
            <TopRatedMovies movies={movies} />
            <LatestMovies movies={movies} />
            <GenreSection />
            <About />
        </div>
    );
};

export default Home;