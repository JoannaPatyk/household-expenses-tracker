import packageJson from '../../package.json';
import React from 'react';
import { LogoForSidebar, NavLinksForBigSidebar } from './';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useCategoriesContext } from '../context/CategoriesContext';

function BigSidebar() {
    const { isSidebarOpen } = useCategoriesContext();
    return (
        <Wrapper>
            <div className={`${isSidebarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'}`}>
                <LogoForSidebar className="logo" />
                <NavLinksForBigSidebar />
                <p className="author">
                    <span>H E T </span>v{packageJson.version} by Joanna Patyk
                </p>
            </div>
        </Wrapper>
    );
}

export default BigSidebar;
