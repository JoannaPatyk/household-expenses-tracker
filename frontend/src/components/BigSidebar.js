import React, { useState } from 'react';
import packageJson from '../../package.json';
import { LogoForSidebar, NavLinksForBigSidebar } from './IndexComponents';
import Wrapper from '../assets/wrappers/BigSidebar';
import { CiBoxList } from 'react-icons/ci';
import { VscChevronLeft } from 'react-icons/vsc';

function BigSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const version = packageJson.version;
    const toggleIcon = isOpen ? <CiBoxList className="btn-open" /> : <VscChevronLeft className="btn-close" />;

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <Wrapper>
            <div className={`${isOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'}`}>
                <button className="btn-toggle" onClick={handleToggle}>
                    {toggleIcon}
                </button>
                <LogoForSidebar className="logo" />
                <NavLinksForBigSidebar />
                <p className="author">
                    <span>H E T </span>v{version} by Joanna Patyk
                </p>
            </div>
        </Wrapper>
    );
}

export default BigSidebar;
