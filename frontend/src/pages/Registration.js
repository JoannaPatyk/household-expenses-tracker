import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TfiBackLeft } from 'react-icons/tfi';
import Wrapper from '../assets/wrappers/Login';
import logo from '../assets/images/logo.png';
import Button from '../components/Button';
import FormRowInput from '../components/FormRowInput';
import { useUserContext } from '../context/UserContext';

function Registration() {
    const navigate = useNavigate();
    const {
        register,
        userEmail,
        userPassword,
        userVerificationPassword,
        setUserVerificationPassword,
        setUserEmail,
        setUserPassword
    } = useUserContext();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userPassword === userVerificationPassword) {
            register(userEmail, userPassword);
            navigate('/landing');
        } else {
            alert('Podane hasło nie jest poprawne. Spróbuj ponownie.');
        }
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
            <form className="registration-form" onSubmit={handleSubmit}>
                <Link to="/landing" className="back-btn">
                    <TfiBackLeft />
                </Link>
                <img src={logo} className="logo" alt="logo" />
                <h2>Podaj dane do rejestracji</h2>
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
                <div className="btn-container">
                    <Button type="submit" version="hero">
                        zarejestruj
                    </Button>
                </div>
            </form>
        </Wrapper>
    );
}

export default Registration;
