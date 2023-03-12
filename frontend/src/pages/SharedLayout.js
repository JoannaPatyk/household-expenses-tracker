import React from 'react';
import { Outlet } from 'react-router-dom';
import { SmallSidebar, BigSidebar } from '../components/IndexComponents';
import Wrapper from '../assets/wrappers/SharedLayout';
import { CiLogout } from 'react-icons/ci';
import background from '../assets/images/background.png';
import { useUserContext } from '../context/UserContext';

function SharedLayout() {
    const { logout } = useUserContext();

    return (
        <Wrapper>
            <main className="dashboard">
                <SmallSidebar />
                <BigSidebar />
                <div>
                    <div className="dashboard-page">
                        <Outlet />
                        <img src={background} alt="background" className="background-image" />
                    </div>
                </div>
                <button className="big-btn-logout" onClick={logout}>
                    <span>
                        <CiLogout />
                    </span>
                    <p className="name">wyloguj</p>
                </button>
                <button className="small-btn-logout" onClick={logout}>
                    <CiLogout className="turn-off" />
                </button>
            </main>
        </Wrapper>
    );
}

export default SharedLayout;
