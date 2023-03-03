import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo, Button, FormRowInput } from '../components';
import { TfiBackLeft } from 'react-icons/tfi';
import Wrapper from '../assets/wrappers/Login';
import background from '../assets/images/background.png';
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
            <form className="form-container" onSubmit={handleSubmit}>
                <Link to="/landing" className="btn-back">
                    <TfiBackLeft />
                </Link>
                <Logo />
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
                <Button type="submit" version="hero">
                    zaloguj się
                </Button>
            </form>
            <img src={background} alt="background" className="background-image" />
        </Wrapper>
    );
}

export default Login;
