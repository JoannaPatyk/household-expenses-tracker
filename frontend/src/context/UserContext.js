import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import apiConfig from '../apiConfig';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userVerificationPassword, setUserVerificationPassword] = useState('');
    const [isLogged, setIsLogged] = useState(false);

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
            localStorage.removeItem('expirationTime');
            localStorage.removeItem('token');
            setIsLogged(false);
        }
    }, []);

    const register = async (email, password) => {
        try {
            await axios(`${apiConfig.api}/user/sign_up`, {
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
            setUserVerificationPassword('');
        } catch (error) {
            setUserEmail('');
            setUserPassword('');
            setUserVerificationPassword('');

            alert('Użytkownik już istnieje, podaj inne dane.');
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

            alert('Dane logowania niepoprawne. Spróbuj ponownie.');
        }
    };

    return (
        <UserContext.Provider
            value={{
                userEmail,
                userPassword,
                userVerificationPassword,
                isLogged,
                setUserEmail,
                setUserPassword,
                setUserVerificationPassword,
                login,
                register
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
