import React from 'react';
import { Link } from 'react-router-dom';
import { GiStairsGoal, GiChart, GiCalculator } from 'react-icons/gi';
import Wrapper from '../assets/wrappers/Landing';
import Logo from '../components/Logo';

function Landing() {
    return (
        <Wrapper>
            <main>
                <div className="container page">
                    <Logo />
                    <div className="landing-title">
                        <h1>Naucz się panować nad swoimi finansami</h1>
                        <h1>oszczędzaj i wydawaj mądrze</h1>
                    </div>
                    <div className="goals-container">
                        <div className="goal">
                            <GiStairsGoal className="goal-icone" />
                            <h3>wyznacz limity</h3>
                            <h5>określ jaką kwotę chcesz przeznaczyć na poszczególne kategorie wydatków</h5>
                        </div>
                        <div className="goal">
                            <GiCalculator className="goal-icone" />
                            <h3>spisuj wydatki</h3>
                            <h5>na bieżąco notuj swoje wydatki według określonych kategorii</h5>
                        </div>
                        <div className="goal">
                            <GiChart className="goal-icone" />
                            <h3>monitoruj sytuację</h3>
                            <h5>przyglądaj się poniesionym kosztom, weryfikuj założenia, wprowadzaj zmiany</h5>
                        </div>
                    </div>

                    <Link to="/register" className="btn btn-hero">
                        zaloguj się
                    </Link>
                    <Link to="/register" className="btn btn-hipster">
                        rejestracja
                    </Link>
                    <p>
                        Dołącz do nas! Zarejestruj się <br /> zacznij kontrolować swoje wydatki z <span>H E T</span>
                    </p>
                </div>
            </main>
        </Wrapper>
    );
}

export default Landing;
