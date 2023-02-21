import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TfiBackLeft } from 'react-icons/tfi';
import Wrapper from '../assets/wrappers/Login';
import Logo from '../components/Logo';
import background from '../assets/images/background.png';
import Button from '../components/Button';
import FormRowInput from '../components/FormRowInput';
import { useUserContext } from '../context/UserContext';

function Registration() {
    const navigate = useNavigate();
    const {
        register,
        userName,
        userEmail,
        userPassword,
        userVerificationPassword,
        setUserVerificationPassword,
        setUserName,
        setUserEmail,
        setUserPassword
    } = useUserContext();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userPassword === userVerificationPassword) {
            register(userName, userEmail, userPassword);
            navigate('/landing');
        } else {
            alert('Podane hasło nie jest poprawne. Spróbuj ponownie.');
        }
    };

    const handleChangeName = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setUserName(value);
    };

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

    const handleChangeVerificationPassword = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setUserVerificationPassword(value);
    };

    return (
        <Wrapper>
            <form className="form-container" onSubmit={handleSubmit}>
                <Link to="/landing" className="btn-back">
                    <TfiBackLeft />
                </Link>
                <Logo />
                <h2>Podaj dane do rejestracji</h2>
                <FormRowInput
                    type="login"
                    value={userName}
                    placeholder="imię"
                    onChange={(event) => handleChangeName(event)}
                />
                <FormRowInput
                    type="email"
                    value={userEmail}
                    placeholder="e-mail"
                    onChange={(event) => handleChangeEmail(event)}
                />
                <FormRowInput
                    type="password"
                    value={userPassword}
                    placeholder="wpisz hasło"
                    onChange={(event) => handleChangePassword(event)}
                />

                <FormRowInput
                    type="password"
                    value={userVerificationPassword}
                    placeholder="powtórz hasło"
                    onChange={(event) => handleChangeVerificationPassword(event)}
                />
                <Button type="submit" version="hero">
                    zarejestruj
                </Button>
            </form>
            <img src={background} alt="background" className="bg" />
        </Wrapper>
    );
}

export default Registration;
