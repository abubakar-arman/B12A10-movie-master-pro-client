import React from 'react';
import Hero from '../components/Hero'
import Stats from '../components/Stats';
import { useLoaderData } from 'react-router';
import TopRatedMovies from '../components/TopRatedMovies';
import LatestMovies from '../components/LatestMovies';
import GenreSection from '../components/GenreSection';

const Home = () => {
    const movies = useLoaderData()
    // console.log(movies);
    
    return (
        <div>
            <Hero />
            <Stats movies={movies} />
            <TopRatedMovies movies={movies} />
            <LatestMovies movies={movies} />
            <GenreSection />
        </div>
    );
};

export default Home;