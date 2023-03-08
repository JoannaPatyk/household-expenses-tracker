import packageJson from '../../package.json';
import React, { useState } from 'react';
import { LogoForSidebar, NavLinksForBigSidebar } from './';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useCategoriesContext } from '../context/CategoriesContext';
import { CiBoxList } from 'react-icons/ci';
import { VscChevronLeft } from 'react-icons/vsc';

function BigSidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const { isSidebarOpen } = useCategoriesContext();
    const { toggleSidebar } = useCategoriesContext();

    const handleToggle = () => {
        toggleSidebar();
        setIsOpen(!isOpen);
    };

    return (
        <Wrapper>
            <div className={`${isSidebarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'}`}>
                <button className="btn-toggle" onClick={handleToggle}>
                    {isOpen ? <VscChevronLeft className="btn-close" /> : <CiBoxList className="btn-open" />}
                </button>
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
