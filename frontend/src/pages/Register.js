import React from 'react';
import { Link } from 'react-router-dom';
import { TfiBackLeft } from 'react-icons/tfi';
import Wrapper from '../assets/wrappers/Register';
import Logo from '../components/Logo';
import Button from '../components/Button';
import FormRowInput from '../components/FormRowInput';

function Register() {
    return (
        <Wrapper>
            <form className="form">
                <Logo id="logo" />
                <h2>Podaj dane do logowania:</h2>
                <FormRowInput type="email" placeholder="email" />
                <FormRowInput type="password" placeholder="password" />
                <Button type="submit" version="hero">
                    zaloguj się
                </Button>
                <Button type="button" version="hipster">
                    rejestracja
                </Button>
            </form>
            <Link to="/landing" className="back-btn">
                <TfiBackLeft />
            </Link>
        </Wrapper>
    );
}

export default Register;
