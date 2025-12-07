import React from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';

const AddMovie = () => {
    const {user} = useAuth()
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target.title.value);

        const formData = {
            title: e.target.title.value,
            genre: e.target.genre.value,
            releaseYear: e.target.releaseYear.value,
            director: e.target.director.value,
            cast: e.target.cast.value,
            posterUrl: e.target.posterUrl.value,
            plotSummary: e.target.plotSummary.value,
            rating: e.target.rating.value,
            duration: e.target.duration.value,
            language: e.target.language.value,
            country: e.target.country.value,
            addedBy: user.email,
            createdAt: new Date().toISOString(),
        }
        // console.log(formData);
        fetch('/api/movies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(() => {
            // console.log(data);
            e.target.reset()
            toast('Movie Added Successfully!')
        })
        .catch(err => {
            console.log(err)
        })
        
    }
    return (
        <div className='flex flex-col items-center mt-10 mb-10'>
            <h3 className='text-3xl font-bold text-accent-content mb-5'>Add Movie</h3>
            <form onSubmit={handleSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-xl text-center">Movie Details</legend>

                    <label className="label">Title</label>
                    <input type="text" className="input" name='title' placeholder="Inception" />

                    <label className="label">Genre</label>
                    <input type="text" className="input" name='genre' placeholder="Sci-Fi" />

                    <label className="label">Release Year</label>
                    <input type="text" className="input" name='releaseYear' placeholder="2010" />

                    <label className="label">Director</label>
                    <input type="text" className="input" name='director' placeholder="Christopher Nolan" />

                    <label className="label">Cast</label>
                    <input type="text" className="input" name='cast' placeholder="Leonardo DiCaprio, Joseph Gordon-Levitt" />

                    <label className="label">Poster URL</label>
                    <input type="text" className="input" name='posterUrl' placeholder="inception.jpg" />

                    <label className="label">Plot Summary</label>
                    <textarea className="textarea" name='plotSummary' placeholder="A thief enters dreams to steal secrets." />

                    <label className="label">IMDB Rating</label>
                    <input type="text" className="input" name='rating' placeholder="8.8" />

                    <label className="label">Duration (Minutes)</label>
                    <input type="text" className="input" name='duration' placeholder="148" />

                    <label className="label">Language</label>
                    <input type="text" className="input" name='language' placeholder="English" />

                    <label className="label">Country</label>
                    <input type="text" className="input" name='country' placeholder="USA" />
                </fieldset>
                <button className="btn btn-primary w-full mt-2">Add</button>
            </form>
        </div>
    );
};

export default AddMovie;