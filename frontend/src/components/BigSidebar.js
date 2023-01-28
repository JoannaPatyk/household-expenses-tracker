import React from 'react';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useCategoriesContext } from '../context/CategoriesContext';
import Logo from './Logo';
import NavLinks from './NavLinks';

function BigSidebar() {
    const { isSidebarOpen } = useCategoriesContext();
    return (
        <Wrapper>
            <div className={`${isSidebarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'}`}>
                <div className="content">
                    <Logo className="logo-container" />
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
}

export default BigSidebar;
