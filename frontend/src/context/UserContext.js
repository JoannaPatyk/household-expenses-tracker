import React, { createContext, useContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import apiConfig from '../apiConfig';
import notification, { SUCCESS, WARNING, ERROR } from '../utils/Notification';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userVerificationPassword, setUserVerificationPassword] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    const [userData, setUserData] = useState({});

    const removeSessionData = () => {
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('token');
    };

    const fetchUser = useCallback(async () => {
        try {
            const response = await axios.get(`${apiConfig.api}/user`);

            const data = response.data;
            setUserData({ name: data.name, email: data.email });
        } catch (error) {
            console.error('error: ', error.response);
        }
    }, []);

    useEffect(() => {
        if (isLogged) {
            fetchUser();
        }
    }, [isLogged, fetchUser]);

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
            notification(SUCCESS, 'Konto zostało utworzone, możesz się teraz zalogować');

            setUserName('');
            setUserEmail('');
            setUserPassword('');
            setUserVerificationPassword('');
        } catch (error) {
            setUserName('');
            setUserEmail('');
            setUserPassword('');
            setUserVerificationPassword('');

            if (error.code === 'ERR_NETWORK') {
                notification(ERROR, 'Serwer nie odpowiada. Spróbuj później');
            } else {
                notification(WARNING, 'Użytkownik o wskazanych danych już istnieje, podaj inne i spróbuj ponownie');
            }
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

            if (error.code === 'ERR_NETWORK') {
                notification(ERROR, 'Serwer nie odpowiada. Spróbuj później');
            } else {
                notification(ERROR, 'Dane logowania niepoprawne');
            }
        }
    };

    const logout = () => {
        removeSessionData();
        setIsLogged(false);
    };

    return (
        <UserContext.Provider
            value={{
                userData,
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
