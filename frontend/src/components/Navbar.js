import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';
import { FaAlignLeft } from 'react-icons/fa';

function Navbar({ toggle }) {
    return (
        <Wrapper>
            <div className="nav-center">
                <button className="btn-toggle" onClick={toggle}>
                    <FaAlignLeft />
                </button>
                <Logo />
            </div>
        </Wrapper>
    );
}

Navbar.propTypes = {
    toggle: PropTypes.func
};

export default Navbar;
