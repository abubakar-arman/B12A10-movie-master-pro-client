import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const UpdateMovie = () => {
    const movie = useLoaderData()
    // console.log(movie);
    
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
        }
        // console.log(formData);
        fetch('http://localhost:3000/movies/'+movie._id, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            // e.target.reset()
            toast('Movie Updated Successfully!')
        })
        .catch(err => {
            console.log(err)
        })
        
    }
    return (
        <div className='flex flex-col items-center mt-10 mb-10'>
            <h3 className='text-3xl font-bold text-accent-content mb-5'>Update Movie</h3>
            <form onSubmit={handleSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-xl text-center">Movie Details</legend>

                    <label className="label">Title</label>
                    <input type="text" className="input" name='title' defaultValue={movie.title} placeholder="Inception" />

                    <label className="label">Genre</label>
                    <input type="text" className="input" name='genre' defaultValue={movie.genre} placeholder="Sci-Fi" />

                    <label className="label">Release Year</label>
                    <input type="text" className="input" name='releaseYear' defaultValue={movie.releaseYear} placeholder="2010" />

                    <label className="label">Director</label>
                    <input type="text" className="input" name='director' defaultValue={movie.director} placeholder="Christopher Nolan" />

                    <label className="label">Cast</label>
                    <input type="text" className="input" name='cast' defaultValue={movie.cast} placeholder="Leonardo DiCaprio, Joseph Gordon-Levitt" />

                    <label className="label">Poster URL</label>
                    <input type="text" className="input" name='posterUrl' defaultValue={movie.posterUrl} placeholder="inception.jpg" />

                    <label className="label">Plot Summary</label>
                    <textarea className="textarea" name='plotSummary' defaultValue={movie.plotSummary} placeholder="A thief enters dreams to steal secrets." />

                    <label className="label">IMDB Rating</label>
                    <input type="text" className="input" name='rating' defaultValue={movie.rating} placeholder="8.8" />

                    <label className="label">Duration (Minutes)</label>
                    <input type="text" className="input" name='duration' defaultValue={movie.duration} placeholder="148" />

                    <label className="label">Language</label>
                    <input type="text" className="input" name='language' defaultValue={movie.language} placeholder="English" />

                    <label className="label">Country</label>
                    <input type="text" className="input" name='country' defaultValue={movie.country} placeholder="USA" />
                </fieldset>
                <button className="btn btn-primary w-full mt-2">Update</button>
            </form>
        </div>
    );
};

export default UpdateMovie;