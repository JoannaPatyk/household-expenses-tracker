import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { TfiBackLeft } from 'react-icons/tfi';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useCategoriesContext } from '../context/CategoriesContext';

function SmallSidebar() {
    const { toggleSidebar, isSidebarOpen } = useCategoriesContext();

    return (
        <Wrapper>
            <div className={`${isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}`}>
                <div className="small-sidebar-content">
                    <button className="btn-back" onClick={toggleSidebar}>
                        <TfiBackLeft />
                    </button>
                    <Logo />
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
}

export default SmallSidebar;
