import React from 'react';
import { Logo, NavLinks } from './';
import { CiUndo } from 'react-icons/ci';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useCategoriesContext } from '../context/CategoriesContext';

function SmallSidebar() {
    const { toggleSidebar, isSidebarOpen } = useCategoriesContext();

    return (
        <Wrapper>
            <div className={`${isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}`}>
                <div className="small-sidebar-content">
                    <button className="btn-back" onClick={toggleSidebar}>
                        <CiUndo />
                    </button>
                    <Logo />
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
}

export default SmallSidebar;
