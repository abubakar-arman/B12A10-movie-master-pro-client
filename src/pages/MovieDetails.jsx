import { FaImdb } from 'react-icons/fa6';
import { Link, useLoaderData, useNavigate} from 'react-router';
import Swal from 'sweetalert2';

const MovieDetails = () => {
    const movie = useLoaderData()
    
    // console.log('kkj', movie);
    // console.log('kk', typeof movie);
    const navigate = useNavigate()
    
    // const { id } = useParams()
    // // console.log('id:', id);

    // const [movie, setMovie] = useState({})
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('/api/movies/' + id)
    //         const data = await res.json()
    //         // console.log('data:', data);
    //         setMovie(data)
    //     }
    //     fetchData()
    // }, [id])

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
                fetch('/api/movies/'+movie._id, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    navigate(-1, {replace: true})
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
            <div className="flex">
                <div className="w-8/12 flex flex-col gap-5">
                    <h2 className="text-6xl font-bold">{movie.title}</h2>
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
                    </div>
                    <button className='btn btn-primary w-fit'>Add to your list</button>
                    <div className='flex gap-5 mt-5'>
                        <Link to={'/update-movie/' + movie._id} className="btn btn-neutral">Update</Link>
                        <button onClick={handleDelete} className="btn btn-neutral">Delete</button>
                    </div>
                </div>
                <img src={'/posters/' + movie.posterUrl} alt=""
                    className='w-3/12 object-cover' />
            </div>
        </div>
    );
};

export default MovieDetails;