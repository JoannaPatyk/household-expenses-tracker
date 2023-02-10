import React from 'react';
import SmallSidebar from '../components/SmallSidebar';
import BigSidebar from '../components/BigSidebar';
import Wrapper from '../assets/wrappers/SharedLayout';
import { Outlet } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import background from '../assets/images/background.png';
import { useCategoriesContext } from '../context/CategoriesContext';

function SharedLayout() {
    const { toggleSidebar } = useCategoriesContext();

    return (
        <Wrapper>
            <main className="dashboard">
                <SmallSidebar />
                <BigSidebar />
                <div>
                    <div>
                        <button className="toggle-btn" onClick={toggleSidebar}>
                            <CgMenuGridO />
                        </button>
                    </div>
                    <div className="dashboard-page">
                        <Outlet />
                        <img src={background} alt="background" className="bg" />
                    </div>
                </div>
            </main>
        </Wrapper>
    );
}

export default SharedLayout;
