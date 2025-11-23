// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaImdb } from 'react-icons/fa6';


const Hero = () => {
    const [movies, setMovies] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        // console.log(2222);
        const fetchData = async () => {
            // setIsLoading(true)
            const res = await fetch('http://localhost:3000/movies/featured')
            const data = await res.json()
            console.log(data);
            setMovies(data)

        }
        fetchData()
    }, [])
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className='lg:h-[600px]'
        >
            {movies.map((movie, i) => (
                <SwiperSlide key={i}>
                    <div className='relative w-full h-[400px] lg:h-[600px] text-white'>
                        <img src={'covers/' + movie.posterUrl} alt="" className='object-cover w-full h-full' />
                        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent"></div>
                        <div className="absolute z-10 inset-0 flex flex-col gap-5 justify-center px-16">
                            <p className="font-bold border-l-4 text-xl border-red-700 pl-2">Featured</p>
                            <h2 className="text-6xl font-bold">{movie.title}</h2>
                            <div className="flex items-center gap-2">
                                <div className="ring-2 ring-primary rounded-full p-2 font-bold size-10">{movie.rating}</div>
                                <FaImdb className='bg-yellow-400 text-black size-8' />
                                <p className="border-l-3 border-white pl-2 ml-4">{movie.releaseYear}</p>
                                <p className="border-l-3 border-white pl-2 ml-4">{movie.genre}</p>
                                <p className="border-l-3 border-white pl-2 ml-4">{movie.director}</p>
                            </div>
                            <p className="">{movie.plotSummary}</p>
                            <button className="btn btn-warning w-fit px-10 py-8">Watch Now</button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Hero;