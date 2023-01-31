import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Landing';
import Logo from '../components/Logo';

function Landing() {
    return (
        <Wrapper>
            <main>
                <Logo />
                <div className="container page">
                    <div className="info">
                        <h1>Naucz się panować nad swoimi finansami</h1>
                        <h1>oszczędzaj i wydawaj mądrze . . .</h1>
                    </div>
                    <Link to="/register" className="btn btn-hero">
                        zaloguj się
                    </Link>
                    <Link to="/register" className="btn btn-hipster">
                        rejestracja
                    </Link>
                    <p>
                        Dołącz do nas! Zarejestruj się <br /> zacznij kontrolować swoje wydatki z H E T
                    </p>
                </div>
            </main>
        </Wrapper>
    );
}

export default Landing;
