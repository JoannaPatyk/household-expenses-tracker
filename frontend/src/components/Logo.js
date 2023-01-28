import React from 'react';
import logo from '../assets/images/logo.png';
import Wrapper from '../assets/wrappers/Logo';

function Logo() {
    return (
        <Wrapper>
            <div className="container">
                <div className="logo-container">
                    <img src={logo} alt="logo" className="logo"></img>
                </div>
                <h4>household expenses tracker</h4>
            </div>
        </Wrapper>
    );
}

export default Logo;