import React from 'react';
import Hero from '../components/Hero'
import Stats from '../components/Stats';
import { useLoaderData } from 'react-router';
import TopRatedMovies from '../components/TopRatedMovies';
import LatestMovies from '../components/LatestMovies';

const Home = () => {
    const movies = useLoaderData()
    // console.log(movies);
    
    return (
        <div>
            <Hero />
            <Stats movies={movies} />
            <TopRatedMovies movies={movies} />
            <LatestMovies movies={movies} />
        </div>
    );
};

export default Home;