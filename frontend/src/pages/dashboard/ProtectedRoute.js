import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

function ProtectedRoute({ children }) {
    const { isLogged } = useUserContext();

    if (!isLogged) {
        return <Navigate to="/landing" />;
    }
    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.any.isRequired
};

export default ProtectedRoute;
