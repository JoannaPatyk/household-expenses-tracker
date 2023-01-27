import React from 'react';
import logo from '../assets/images/logo.png';
import Wrapper from '../assets/wrappers/Logo';

export default function Logo() {
    return (
        <Wrapper>
            <div className="container">
                <div className="logo-container">
                    <img src={logo} alt="logo" className="logo"></img>
                    <h1>h e t</h1>
                </div>
                <h4>
                    household <span>expenses</span> tracker
                </h4>
            </div>
        </Wrapper>
    );
}
