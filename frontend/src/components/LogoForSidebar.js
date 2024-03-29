import React from 'react';
import { GiTakeMyMoney } from 'react-icons/gi';
import Wrapper from '../assets/wrappers/LogoForSidebar';

function Logo() {
    return (
        <Wrapper>
            <div className="logo-container">
                <div className="logo">
                    <GiTakeMyMoney className="logo-icon" />
                </div>
                <h4 className="logo-title">
                    <span>h</span>ousehold <span>e</span>xpenses <br /> <span>t</span>racker
                </h4>
            </div>
        </Wrapper>
    );
}

export default Logo;
