import React from 'react';
import { GiReceiveMoney } from 'react-icons/gi';
import Wrapper from '../assets/wrappers/Logo';

function Logo() {
    return (
        <Wrapper>
            <div className="logo-container">
                <div className="logo">
                    <GiReceiveMoney className="logo-icon" />
                </div>
                <h4 className="logo-title">
                    <span>h</span>ousehold <span>e</span>xpenses <br /> <span>t</span>racker
                </h4>
            </div>
        </Wrapper>
    );
}

export default Logo;
