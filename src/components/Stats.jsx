import React from 'react';

const Stats = ({movies}) => {
    return (
        <div className='flex flex-col items-center mt-10 mb-10' data-aos='slide-up' >
            <h3 className='text-3xl font-bold text-accent-content'>Stats</h3>
            <div className="stats stats-vertical lg:stats-horizontal shadow w-lg text-center 
            bg-warning text-accent-content mt-5">
                <div className="stat">
                    <div className="stat-title">Total Movies</div>
                    <div className="stat-value">{movies.length}</div>
                    <div className="stat-desc">Blockbusters</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">Enjoying</div>
                </div>
            </div>
        </div>

    );
};

export default Stats;