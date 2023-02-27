import React from 'react';
import { Link } from 'react-router-dom';
import { GiHammerBreak } from 'react-icons/gi';
import background from '../assets/images/background.png';
import Wrapper from '../assets/wrappers/Error';

export default function Error() {
    return (
        <Wrapper>
            <div className="error-container">
                <GiHammerBreak className="not-found-img" />
                <h3>Nie znaleziono strony!</h3>
                <p>Nie możemy wyświetlić strony, której szukasz...</p>
                <Link to="/" className="btn">
                    wróć
                </Link>
                <img src={background} alt="tło" className="background-img" />
            </div>
        </Wrapper>
    );
}
