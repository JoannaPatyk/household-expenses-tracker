import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useCategoriesContext } from '../context/CategoriesContext';

function SmallSidebar() {
    const { toggleSidebar, isSidebarOpen } = useCategoriesContext();

    return (
        <Wrapper>
            <div className={`${isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}`}>
                <div className="content">
                    <button className="close-btn" onClick={toggleSidebar}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
}

export default SmallSidebar;
