import React from 'react';

const GenreSection = () => {
    const genres = ['Sci-Fi', 'Action', 'Romance', 'Drama', 'Thriller', 'Animation', 'Crime']
    return (
        <div className='flex flex-col items-center mt-10 mb-10 px-20'>
            <h3 className='text-3xl font-bold text-accent-content'>Genres</h3>
            <div className="lg:flex space-y-1 lg:space-y-0 gap-1 shadow w-full text-center 
            text-accent-content mt-5">
                {genres.map((genre, i) => (
                    <div key={i} 
                    className="stat bg-warning rounded-lg p-4 min-w-[90px] flex 
                    items-center justify-center cursor-pointer transform transition-all 
                    duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl 
                    hover:rotate-1 hover:bg-warning/90">
                        <div 
                        className="stat-value text-base font-semibold transition-colors 
                        duration-200 group-hover:text-white">{genre}</div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default GenreSection;