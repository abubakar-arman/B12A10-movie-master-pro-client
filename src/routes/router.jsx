import { createBrowserRouter } from 'react-router'
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import AllMovies from '../pages/AllMovies';
import MovieDetails from '../pages/MovieDetails';
import AddMovie from '../pages/AddMovie';
import UpdateMovie from '../pages/UpdateMovie';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        element:
          <Home />,
        loader: () => fetch('http://localhost:3000/movies')
      },
      {
        path: '/movies',
        element:
          <AllMovies />,
        loader: () => fetch('http://localhost:3000/movies')
      },
      {
        path: '/movie-details/:id',
        element:
          <MovieDetails />,
      },
      {
        path: '/add-movie',
        element:
          <AddMovie />,
      },
      {
        path: '/update-movie/:id',
        element:
          <UpdateMovie />,
        loader: ({params}) => fetch('http://localhost:3000/movies/'+params.id)
      }
    ]
  },
]);

export default router;