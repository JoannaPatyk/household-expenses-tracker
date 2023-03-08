import React from 'react';
import { LogoForSidebar, NavLinksForSmallSidebar } from './';
import { TfiBackLeft } from 'react-icons/tfi';
import { CiBoxList } from 'react-icons/ci';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useCategoriesContext } from '../context/CategoriesContext';

function SmallSidebar() {
    const { toggleSidebar, isSidebarOpen } = useCategoriesContext();

    return (
        <Wrapper>
            <button className="btn-toggle" onClick={toggleSidebar}>
                <CiBoxList className="btn-open" />
            </button>
            <div className={`${isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}`}>
                <div className="small-sidebar-content">
                    <button id="btn-back" className="btn-back" onClick={toggleSidebar}>
                        <TfiBackLeft />
                    </button>
                    <LogoForSidebar />
                    <NavLinksForSmallSidebar />
                </div>
            </div>
        </Wrapper>
    );
}

export default SmallSidebar;
