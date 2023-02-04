import React from 'react';
import { Link } from 'react-router-dom';
import { TfiBackLeft } from 'react-icons/tfi';
import Wrapper from '../assets/wrappers/Register';
import logo from '../assets/images/logo.png';
import Button from '../components/Button';
import FormRowInput from '../components/FormRowInput';

function Register() {
    return (
        <Wrapper>
            <form className="registration-form">
                <Link to="/landing" className="back-btn">
                    <TfiBackLeft />
                </Link>
                <img src={logo} className="logo" alt="logo" />
                <h2>Podaj dane do logowania</h2>
                <FormRowInput type="email" placeholder="e-mail" />
                <FormRowInput type="password" placeholder="hasło" />
                <div className="btn-container">
                    <Button type="submit" version="hero">
                        zaloguj się
                    </Button>
                    <Button type="button" version="hipster">
                        rejestracja
                    </Button>
                </div>
            </form>
        </Wrapper>
    );
}

export default Register;
