import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/404.png';
import Wrapper from '../assets/wrappers/ErrorPage';

export default function Error() {
    return (
        <Wrapper className="full-page">
            <div>
                <img src={img} alt="not found" />
                <h3>Ohh, page not found!</h3>
                <p>We can't find the page you're looking for...</p>
                <Link to="/" className="btn">
                    back home
                </Link>
            </div>
        </Wrapper>
    );
}
