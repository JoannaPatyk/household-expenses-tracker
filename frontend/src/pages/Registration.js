import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import notification, { INFO, ERROR } from '../utils/Notification';
import { TfiBackLeft } from 'react-icons/tfi';
import Wrapper from '../assets/wrappers/Login';
import background from '../assets/images/background.png';
import { Logo, Button, FormRowInput, LoadingIndicator, OpacityBackground } from '../components';
import { useUserContext } from '../context/UserContext';
import { trackPromise } from 'react-promise-tracker';

function Registration() {
    const [buttonDisabled, setButtonDisabled] = useState(true);
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (userPassword === userVerificationPassword) {
            if (userPassword === '') {
                notification(ERROR, 'Proszę podać hasło!');
                return;
            } else if (userPassword.length < 8) {
                notification(INFO, 'Hasło powinno mieć minimum 8 znaków, wpisz nowe');
                return;
            }

            await trackPromise(register(userName, userEmail, userPassword), 'login-registration');
            navigate('/landing');
        } else {
            notification(ERROR, 'Podane hasła nie zgadzają się');
        }
    };

    const handleChangeName = (event) => {
        const name = event.target.value;
        if (name === '') {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
        setUserName(name);
    };

    const handleChangeEmail = (event) => {
        const email = event.target.value;
        setUserEmail(email);
    };

    const handleChangePassword = (event) => {
        const password = event.target.value;
        setUserPassword(password);
    };

    const handleChangeVerificationPassword = (event) => {
        const verificationPassword = event.target.value;
        setUserVerificationPassword(verificationPassword);
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
                <Button type="submit" version="hero" isDisabled={buttonDisabled}>
                    zarejestruj
                </Button>
                <p>*Wszystkie pola są wymagane.</p>
            </form>
            <img src={background} alt="background" className="background-image" />
            <OpacityBackground area="login-registration" />
            <LoadingIndicator area="login-registration" />
        </Wrapper>
    );
}

export default Registration;
