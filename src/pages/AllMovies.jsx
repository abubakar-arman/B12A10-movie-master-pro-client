import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { useLoaderData, useNavigate } from 'react-router';

const AllMovies = () => {
    const movies = useLoaderData()
    // console.log(movies);
    const navigate = useNavigate()

    const handleCardClick = (id) => {
        navigate('/movieDetails/'+id)
    }

    return (
        <div className='mt-10 mb-10 text-center'>
            <h3 className='text-3xl font-bold text-accent-content mb-5'>All Movies</h3>
            <div className="cards grid grid-cols-4 gap-10 px-20">
                {
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