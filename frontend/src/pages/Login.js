import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TfiBackLeft } from 'react-icons/tfi';
import Wrapper from '../assets/wrappers/Login';
import logo from '../assets/images/logo.png';
import Button from '../components/Button';
import FormRowInput from '../components/FormRowInput';
import { useUserContext } from '../context/UserContext';

function Login() {
    const navigate = useNavigate();
    const { login, isLogged, userEmail, userPassword, setUserEmail, setUserPassword } = useUserContext();

    const handleSubmit = (event) => {
        event.preventDefault();

        login(userEmail, userPassword);
    };

    useEffect(() => {
        if (isLogged) {
            navigate('/add');
        }
    }, [isLogged, navigate]);

    const handleChangeEmail = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setUserEmail(value);
    };

    const handleChangePassword = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setUserPassword(value);
    };

    return (
        <Wrapper>
            <form className="registration-form" onSubmit={handleSubmit}>
                <Link to="/landing" className="back-btn">
                    <TfiBackLeft />
                </Link>
                <img src={logo} className="logo" alt="logo" />
                <h2>Podaj dane do logowania</h2>
                <FormRowInput
                    type="email"
                    value={userEmail}
                    placeholder="e-mail"
                    onChange={(event) => handleChangeEmail(event)}
                />
                <FormRowInput
                    type="password"
                    value={userPassword}
                    placeholder="hasło"
                    onChange={(event) => handleChangePassword(event)}
                />
                <div className="btn-container">
                    <Button type="submit" version="hero">
                        zaloguj się
                    </Button>
                </div>
            </form>
        </Wrapper>
    );
}

export default Login;
