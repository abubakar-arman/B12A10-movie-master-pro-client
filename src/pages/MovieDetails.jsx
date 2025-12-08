import { useEffect } from 'react';
import { FaImdb } from 'react-icons/fa6';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { useState } from 'react';

const MovieDetails = () => {
    const { isAuthenticated, user } = useAuth()
    const data = useLoaderData()
    const navigate = useNavigate()
    const { id } = useParams()
    const [isWatchList, setIsWatchList] = useState(false)
    const [movieOwner, setMovieOwner] = useState(false)
    // console.log('id:', id);
    // console.log(movie);

    useEffect(() => {
        // console.log(333, movie);

        if (!data || !data.success) {
            return navigate('/movie-not-found')
        }
    }, [data, navigate])

    useEffect(() => {
        if (!user) return

        fetch('https://moviemaster-pro.vercel.app/watchlist?email=' + user.email, {
            headers: {
                authorization: 'Bearer ' + user.accessToken
            }
        })
        .then(res => res.json())
        .then(data => {
                const matched = data.result.filter(mv => mv._id === id);
                if (matched.length)
                    setIsWatchList(true)
            })
            .catch(err => {
                console.log(err);

            });
    }, [user, id])


    const movie = data?.result || {}
    // console.log(222,movie);



    const handleWatchlist = () => {
        if (!user) return
        const formData = {
            email: user.email,
            movieId: id,
        }
        // console.log(formData);
        if (!isWatchList) {

            // console.log(222, isWatchList)
            fetch('https://moviemaster-pro.vercel.app/watchlist', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: 'Bearer ' + user.accessToken
                },
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(() => {
                    // console.log(data);
                    setIsWatchList(true)
                    toast('Movie Added to Watchlater!')
                })
                .catch(err => {
                    // console.log(err)
                })
        } else {
            fetch('https://moviemaster-pro.vercel.app/watchlist', {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    authorization: 'Bearer ' + user.accessToken
                },
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(() => {
                    // console.log(data);
                    setIsWatchList(false)
                    toast('Movie Removed from Watchlater!')
                })
                .catch(err => {
                    // console.log(err)
                })
        }
    }
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://moviemaster-pro.vercel.app/movies/' + movie._id, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        navigate(-1, { replace: true })
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
            }
        });
    }

    return (
        <div className='mt-10 mb-10 px-20'>
            <div className="lg:flex lg:flex-row-reverse">
                <img src={'/posters/' + movie.posterUrl} alt=""
                    className='w-3/12 object-cover hidden lg:block' />
                <div className="lg:w-8/12 flex flex-col gap-5">
                    <h2 className="text-6xl font-bold">{movie.title}</h2>

                    <img src={'/posters/' + movie.posterUrl} alt=""
                        className='w-11/12 object-cover lg:hidden' />
                    <div className="flex items-center gap-2">
                        <div className="ring-2 ring-primary rounded-full p-2 font-bold size-10">{movie.rating}</div>
                        <FaImdb className='bg-yellow-400 text-black size-8' />
                        <p className="border-l-3 border-primary pl-2 ml-4 font-bold">{movie.releaseYear}</p>
                        <p className="border-l-3 border-primary pl-2 ml-4 text-red-600 font-bold">{movie.genre}</p>
                    </div>
                    <p className="">{movie.plotSummary}</p>
                    <div>
                        <p className=""><strong>Director : </strong>{movie.director}</p>
                        <p className=""><strong>Cast : </strong>{movie.cast}</p>
                        <p className=""><strong>Duration : </strong>{movie.duration} Minutes</p>
                        <p className=""><strong>Added By : </strong>{movie.addedBy}</p>
                        <p className=""><strong>Added at : </strong>{movie.createdAt}</p>
                    </div>
                    {isAuthenticated && <>
                        <button onClick={handleWatchlist} className='btn btn-primary w-fit'>{isWatchList ? 'Remove from Watchlist' : 'Add to Watchlist'}</button>
                        {movie.addedBy === user.email &&
                            <div className='flex gap-5 mt-5'>
                                <Link to={'/update-movie/' + movie._id} className="btn btn-neutral">Update</Link>
                                <button onClick={handleDelete} className="btn btn-neutral">Delete</button>
                            </div>
                        }
                    </>}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;