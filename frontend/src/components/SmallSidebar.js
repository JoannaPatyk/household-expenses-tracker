import React, { useState } from 'react';
import { LogoForSidebar, NavLinksForSmallSidebar } from './IndexComponents';
import { TfiBackLeft } from 'react-icons/tfi';
import { CiBoxList } from 'react-icons/ci';
import Wrapper from '../assets/wrappers/SmallSidebar';

function SmallSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <Wrapper>
            <button className="btn-toggle" onClick={handleToggle}>
                <CiBoxList className="btn-open" />
            </button>
            <div className={`${isOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}`}>
                <div className="small-sidebar-content">
                    <button id="btn-back" className="btn-back" onClick={handleToggle}>
                        <TfiBackLeft />
                    </button>
                    <LogoForSidebar />
                    <NavLinksForSmallSidebar handleToggle={handleToggle} />
                </div>
            </div>
        </Wrapper>
    );
}

export default SmallSidebar;
