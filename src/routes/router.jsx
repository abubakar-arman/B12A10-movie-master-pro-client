import { createBrowserRouter } from 'react-router'
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import AllMovies from '../pages/AllMovies';

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
      }
    ]
  },
]);

export default router;