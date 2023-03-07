import React from 'react';
import packageJson from '../../package.json';
import { LogoForSidebar, NavLinksForSmallSidebar } from './';
import { TfiBackLeft } from 'react-icons/tfi';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useCategoriesContext } from '../context/CategoriesContext';

function SmallSidebar() {
    const { toggleSidebar, isSidebarOpen } = useCategoriesContext();

    return (
        <Wrapper>
            <div className={`${isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}`}>
                <div className="small-sidebar-content">
                    <button id="btn-back" className="btn-back" onClick={toggleSidebar}>
                        <TfiBackLeft />
                    </button>
                    <LogoForSidebar />
                    <NavLinksForSmallSidebar />
                    <p className="author">
                        <span>H E T </span>v{packageJson.version} by Joanna Patyk
                    </p>
                </div>
            </div>
        </Wrapper>
    );
}

export default SmallSidebar;
