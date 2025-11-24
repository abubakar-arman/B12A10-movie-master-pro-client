import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location);
    

    useEffect(() => {
        if(!isAuthenticated)
            navigate('/login', {
                state: {from: location}
            })
    }, [isAuthenticated, navigate, location])

    return isAuthenticated ? children : null;
};

export default ProtectedRoute;