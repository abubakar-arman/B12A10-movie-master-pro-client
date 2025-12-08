import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
import Spinner from '../components/Spinner'


const AllMovies = () => {
    const [movies, setMovies] = useState([])
    // const data = useLoaderData()
    // console.log(movies);
    const navigate = useNavigate()
    // const [searchKey, setSearchKey] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [selectedGenres, setSelectedGenres] = useState([])
    const [minRating, setMinRating] = useState(0)
    const [maxRating, setMaxRating] = useState(0)

    useEffect(() => {
        fetch('https://moviemaster-pro.vercel.app/movies')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setMovies(data)
            })
            .catch(err => console.error(err))
    }, [])

    const handleCardClick = (id) => {
        navigate('/movie-details/' + id)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        const searchKey = e.target.search.value

        setIsLoading(true)
        fetch('https://moviemaster-pro.vercel.app/search?searchKey=' + searchKey, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then((data) => {
                setMovies(data.result)
                // console.log(6666, data);

                setIsLoading(false)
            })
            .catch(err => console.error(err))

    }

    const fetchMovies = (genres = [], min = 0, max = 10) => {
        setIsLoading(true)

        const params = new URLSearchParams()
        if (genres.length > 0) params.append('genres', genres.join(','))
        params.append('minRating', min)
        params.append('maxRating', max)

        fetch(`https://moviemaster-pro.vercel.app/movies?${params}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data)
                setIsLoading(false)
            })
            .catch(err => {
                console.error(err)
                setIsLoading(false)
            })
    }

    const handleGenreChange = (genre) => {
        const updated = selectedGenres.includes(genre)
            ? selectedGenres.filter(g => g !== genre)
            : [...selectedGenres, genre]

        setSelectedGenres(updated)
        fetchMovies(updated, minRating, maxRating)
    }

    const handleRatingChange = (e) => {
        const value = parseInt(e.target.value)
        setMaxRating(value)
        fetchMovies(selectedGenres, minRating, value)
    }

    // if (isLoading) {
    //     return <Spinner />
    // }
    return (
        <div className='mt-10 mb-10 text-center'>
            <h3 className='text-3xl font-bold text-accent-content mb-5'>All Movies</h3>
            <div className="flex justify-center">
                <form onSubmit={handleSearch} className='mb-5 flex'>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input name="search" type="search" placeholder="Search" />
                    </label>
                    <button className='btn btn-warning ml-4 '>Search</button>
                </form>

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-primary ml-8">Filter</div>
                    <div tabIndex={0} className="dropdown-content card card-sm bg-base-100 z-10 right-0 w-72 shadow-md">
                        <div className="card-body">
                            <div>
                                <h4 className="font-bold mb-3">Genres</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {['Sci-Fi', 'Action', 'Animation', 'Drama', 'Comedy'].map(genre => (
                                        <label key={genre}>
                                            <input
                                                type="checkbox"
                                                checked={selectedGenres.includes(genre)}
                                                onChange={() => handleGenreChange(genre)}
                                            />
                                            {genre}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4">
                                <h4 className="font-bold mb-3">Rating: {maxRating}</h4>
                                <input
                                    type="range"
                                    min="0"
                                    max="10"
                                    value={maxRating}
                                    onChange={handleRatingChange}
                                    className="range range-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-20">
                {isLoading ? <Spinner /> :
                    movies.map((movie, i) => (
                        <div onClick={() => handleCardClick(movie._id)} key={i} className="card bg-base-100 w-72 shadow-sm">
                            <figure className='relative overflow-hidden rounded-lg group'>
                                <img
                                    src={'/posters/' + movie.posterUrl}
                                    alt="Movie Poster"
                                    className='h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="absolute inset-0 flex flex-col justify-end p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <h3 className="text-white text-lg font-semibold leading-tight">{movie.title}</h3>
                                    <div className="mt-2 flex items-center justify-between text-sm text-gray-200">
                                        <div className="flex items-center gap-2">
                                            <FaStar className='text-yellow-400' />
                                            <span>{movie.rating}</span>
                                        </div>
                                        <button className="btn btn-sm btn-warning">Details</button>
                                    </div>
                                </div>
                            </figure>
                            <div className="flex flex-col gap-2 mt-2 text-sm px-2">
                                <div className="flex justify-between">
                                    <p className="">{movie.country}</p>
                                    <p className="">{movie.releaseYear}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-red-600 font-bold p-0 m-0">{movie.genre}</p>
                                </div>
                                <h2 className="text-lg text-left">{movie.title}</h2>

                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default AllMovies;