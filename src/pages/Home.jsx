import React from 'react';
import Hero from '../components/Hero'
import Stats from '../components/Stats';
import { useLoaderData } from 'react-router';

const Home = () => {
    const movies = useLoaderData()
    // console.log(movies);
    
    return (
        <div>
            <Hero />
            <Stats movies={movies} />
        </div>
    );
};

export default Home;