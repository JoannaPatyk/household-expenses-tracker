import React from 'react';
import { LogoForSidebar, NavLinks } from './';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useCategoriesContext } from '../context/CategoriesContext';

function BigSidebar() {
    const { isSidebarOpen } = useCategoriesContext();
    return (
        <Wrapper>
            <div className={`${isSidebarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'}`}>
                <LogoForSidebar className="logo" />
                <NavLinks />
            </div>
        </Wrapper>
    );
}

export default BigSidebar;
