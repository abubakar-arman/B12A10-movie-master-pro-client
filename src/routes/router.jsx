import { createBrowserRouter } from 'react-router'
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import AllMovies from '../pages/AllMovies';
import MovieDetails from '../pages/MovieDetails';
import AddMovie from '../pages/AddMovie';
import UpdateMovie from '../pages/UpdateMovie';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoute from './ProtectedRoutes';
import MyCollection from '../pages/MyCollection';
import WatchList from '../pages/WatchList';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        element:
          <Home />,
        loader: () => fetch('/api/movies')
      },
      {
        path: '/movies',
        element:
          <AllMovies />
      },
      {
        path: '/movie-details/:id',
        element:
          <MovieDetails />,
        loader: ({ params }) => fetch('/api/movies/' + params.id)
      },
      {
        path: '/add-movie',
        element:
        <ProtectedRoute>
          <AddMovie />,
        </ProtectedRoute>
      },
      {
        path: '/update-movie/:id',
        element:
          <ProtectedRoute>
            <UpdateMovie />
          </ProtectedRoute>,
        loader: ({ params }) => fetch('/api/movies/' + params.id)
      },
      {
        path: '/my-collection',
        element:
        <ProtectedRoute>
          <MyCollection />
        </ProtectedRoute>
      },
      {
        path: '/watchlist',
        element:
        <ProtectedRoute>
          <WatchList />
        </ProtectedRoute>
      },
      {
        path: '/login',
        element:
          <Login />
      },
      {
        path: '/register',
        element:
          <Register />
      },
      {
        path: '/*',
        element:
          <NotFound />
      }
    ]
  },
]);

export default router;