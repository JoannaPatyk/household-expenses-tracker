import React from 'react';
import { Outlet } from 'react-router-dom';
import SmallSidebar from '../components/SmallSidebar';
import BigSidebar from '../components/BigSidebar';
import Wrapper from '../assets/wrappers/SharedLayout';
import { CgMenuGridO } from 'react-icons/cg';
import { BsPerson } from 'react-icons/bs';
import background from '../assets/images/background.png';
import { useCategoriesContext } from '../context/CategoriesContext';
import { useUserContext } from '../context/UserContext';

function SharedLayout() {
    const { toggleSidebar } = useCategoriesContext();
    const { logout } = useUserContext();

    return (
        <Wrapper>
            <main className="dashboard">
                <SmallSidebar />
                <BigSidebar />
                <div>
                    <button className="btn-toggle" onClick={toggleSidebar}>
                        <CgMenuGridO />
                    </button>
                    <div className="dashboard-page">
                        <Outlet />
                        <img src={background} alt="background" className="bg" />
                    </div>
                </div>
                <button className="btn-logout" onClick={logout}>
                    <span>
                        <BsPerson />
                    </span>
                    <p>wyloguj</p>
                </button>
            </main>
        </Wrapper>
    );
}

export default SharedLayout;
