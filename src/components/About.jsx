import React from 'react';

const About = () => {
    return (
        <div className='flex flex-col items-center mt-10 mb-10 px-20' data-aos='zoom-out'>
            <h3 className='text-3xl font-bold text-accent-content text-center mb-5'>MovieMaster Pro: The Ultimate Cinematic Experience</h3>
            <p className="text-center text-accent-content/70">MovieMaster Pro is a premium, subscription-based streaming
                platform dedicated exclusively to cinematic content. It offers a vast,
                meticulously curated library ranging from Hollywood blockbusters and
                critically-acclaimed originals to independent films, foreign cinema, and
                timeless classics. Our mission is to provide an unparalleled viewing
                environment that respects the art of filmmaking.</p>
            <div className="p-8">

                <div className="max-w-2xl mx-auto bg-base-300 p-8 rounded-xl shadow-2xl border border-gray-700 text-base-content/80">
                    <h1 className="text-3xl font-extrabold mb-6 text-red-500 border-b-2 border-red-500 pb-2">
                        <span className="text-primary">MovieMaster</span> Pro Features
                    </h1>
                    <p className="text-base-content/40 mb-6">A quick summary of the key benefits and features of the premium streaming service.</p>

                    <ul className="space-y-4 list-none p-0">
                        <li className="flex items-start">
                            <span className="text-red-500 text-xl mr-3 leading-none">&#9733;</span>
                            <div>
                                <strong className="text-primary">Core Content & Originals:</strong> Vast, curated library including Hollywood, Classics, Foreign Films, and high-budget <strong>MovieMaster Originals</strong>.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 text-xl mr-3 leading-none">&#9733;</span>
                            <div>
                                <strong className="text-primary">High Fidelity:</strong> Standard <strong>4K Ultra HD</strong> with <strong>HDR/Dolby Vision</strong> video and premium <strong>Dolby Atmos</strong> audio support.
                            </div>
                        </li>

                        <li className="flex items-start">
                            <span className="text-red-500 text-xl mr-3 leading-none">&#9733;</span>
                            <div>
                                <strong className="text-primary">Ad-Free Viewing:</strong> A commitment to a <strong>100% Ad-Free</strong> and immersive experience.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 text-xl mr-3 leading-none">&#9733;</span>
                            <div>
                                <strong className="text-primary">Offline Access:</strong> <strong>Offline Downloads</strong> available for mobile devices.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 text-xl mr-3 leading-none">&#9733;</span>
                            <div>
                                <strong className="text-primary">Multi-Device Support:</strong> Apps for Smart TVs, Consoles, Web, and Mobile.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 text-xl mr-3 leading-none">&#9733;</span>
                            <div>
                                <strong className="text-primary">Sharing & Streams:</strong> Up to <strong>4 Simultaneous Streams</strong> per account.
                            </div>
                        </li>

                        <li className="flex items-start">
                            <span className="text-red-500 text-xl mr-3 leading-none">&#9733;</span>
                            <div>
                                <strong className="text-primary">Pro-Files:</strong> Up to 6 personalized <strong>User Profiles</strong> with unique, advanced recommendations.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 text-xl mr-3 leading-none">&#9733;</span>
                            <div>
                                <strong className="text-primary">Deep Dive Extras:</strong> Exclusive access to <strong>Director's Commentary, Making-of, and Deleted Scenes</strong>.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 text-xl mr-3 leading-none">&#9733;</span>
                            <div>
                                <strong className="text-primary">Film School Mode:</strong> Optional toggle for on-screen trivia and film analysis while watching.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 text-xl mr-3 leading-none">&#9733;</span>
                            <div>
                                <strong className="text-primary">Master Vault:</strong> Dedicated section for restored classic and rare cinema.
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    );
};

export default About;