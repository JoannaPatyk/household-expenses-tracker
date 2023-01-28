import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar';

function SmallSidebar({ toggle, isSidebarOpen }) {
    return (
        <Wrapper>
            <div className={isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
                <div className="content">
                    <button className="close-btn" onClick={toggle}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <NavLinks toggleSidebar={toggle} />
                </div>
            </div>
        </Wrapper>
    );
}

SmallSidebar.defaultProps = {
    isSidebarOpen: 'false'
};

SmallSidebar.propTypes = {
    toggle: PropTypes.func,
    isSidebarOpen: PropTypes.bool
};

export default SmallSidebar;
