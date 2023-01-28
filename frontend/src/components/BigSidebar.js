import React from 'react';
import PropTypes from 'prop-types';
import NavLinks from './NavLinks';
import Wrapper from '../assets/wrappers/BigSidebar';

function BigSidebar({ isSidebarOpen }) {
    return (
        <Wrapper>
            <div className={isSidebarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
                <div className="content">
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
}

BigSidebar.defaultProps = {
    isSidebarOpen: 'false'
};

BigSidebar.propTypes = {
    isSidebarOpen: PropTypes.bool
};

export default BigSidebar;
