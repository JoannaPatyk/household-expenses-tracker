import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import apiConfig from '../apiConfig';
import { toast } from 'react-toastify';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userVerificationPassword, setUserVerificationPassword] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    const removeSessionData = () => {
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('token');
    };

    useEffect(() => {
        const hours = 1;
        const now = new Date().getTime();
        const setupTime = localStorage.getItem('expirationTime');

        if (setupTime !== null && now - setupTime < hours * 60 * 60 * 1000) {
            const token = localStorage.getItem('token');

            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                axios.defaults.headers.post['Content-Type'] = 'application/json';
                setIsLogged(true);
            }
        } else {
            removeSessionData();
            setIsLogged(false);
        }
    }, []);

    const register = async (name, email, password) => {
        try {
            await axios(`${apiConfig.api}/user/sign_up`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    name: name,
                    email: email,
                    password: password
                }
            });

            setUserName('');
            setUserEmail('');
            setUserPassword('');
            setUserVerificationPassword('');
        } catch (error) {
            setUserName('');
            setUserEmail('');
            setUserPassword('');
            setUserVerificationPassword('');

            toast.warning('Użytkownik o wskazanych danych już istnieje, podaj inne i spróbuj ponownie.', {
                position: toast.POSITION.BOTTOM_LEFT,
                className: 'toast-message'
            });
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios(`${apiConfig.api}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    email: email,
                    password: password
                }
            });

            setUserEmail('');
            setUserPassword('');
            setIsLogged(true);

            const token = response.data.token;
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';

            localStorage.setItem('token', token);
            localStorage.setItem('expirationTime', new Date().getTime());
        } catch (error) {
            setUserEmail('');
            setUserPassword('');

            toast.error('Dane logowania niepoprawne. Spróbuj ponownie.', {
                position: toast.POSITION.BOTTOM_LEFT,
                className: 'toast-message'
            });
        }
    };

    const logout = () => {
        removeSessionData();
        setIsLogged(false);
    };

    return (
        <UserContext.Provider
            value={{
                userName,
                userEmail,
                userPassword,
                userVerificationPassword,
                isLogged,
                setUserName,
                setUserEmail,
                setUserPassword,
                setUserVerificationPassword,
                login,
                register,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.any.isRequired
};

export const useUserContext = () => {
    return useContext(UserContext);
};
