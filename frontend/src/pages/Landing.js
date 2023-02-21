import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiStairsGoal, GiChart, GiCalculator } from 'react-icons/gi';
import Logo from '../components/Logo';
import background from '../assets/images/background.png';
import Wrapper from '../assets/wrappers/Landing';
import { useUserContext } from '../context/UserContext';

function Landing() {
    const navigate = useNavigate();
    const { isLogged } = useUserContext();

    useEffect(() => {
        if (isLogged) {
            navigate('/add');
        }
    }, [isLogged, navigate]);

    return (
        <Wrapper>
            <main className="main-container">
                <div className="landing-container">
                    <Logo />
                    <div className="landing-text">
                        <h1>
                            Naucz się panować nad swoimi wydatkami <br />
                            oszczędzaj i wydawaj mądrze...
                        </h1>
                        <img src={background} alt="background" className="bg" />
                    </div>
                </div>
                <div className="goals-container">
                    <div className="goal">
                        <GiStairsGoal className="goal-icone" />
                        <h3>wyznacz limity</h3>
                        <h5>określ jaką kwotę chcesz przeznaczyć na poszczególne wydatków</h5>
                    </div>
                    <div className="goal">
                        <GiCalculator className="goal-icone" />
                        <h3>spisuj wydatki</h3>
                        <h5>notuj na bieżąco swoje wydatki według wcześniej określonych kategorii</h5>
                    </div>
                    <div className="goal">
                        <GiChart className="goal-icone" />
                        <h3>monitoruj sytuację</h3>
                        <h5>przyglądaj się poniesionym kosztom, weryfikuj założenia, wprowadzaj zmiany</h5>
                    </div>
                </div>
                <Link to="/login" className="btn btn-hero">
                    zaloguj się
                </Link>
                <Link to="/registration" className="btn btn-hipster">
                    rejestracja
                </Link>
                <p>
                    Dołącz do nas! Zarejestruj się <br /> zacznij kontrolować swoje wydatki z <span>H E T</span>
                </p>
            </main>
        </Wrapper>
    );
}

export default Landing;
