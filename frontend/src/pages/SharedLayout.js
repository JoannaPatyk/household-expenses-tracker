import React from 'react';
import { Outlet } from 'react-router-dom';
import { SmallSidebar, BigSidebar } from '../components';
import Wrapper from '../assets/wrappers/SharedLayout';
import background from '../assets/images/background.png';
import { CiBoxList, CiLogout, CiUser } from 'react-icons/ci';
import { useCategoriesContext } from '../context/CategoriesContext';
import { useUserContext } from '../context/UserContext';

function SharedLayout() {
    const { toggleSidebar } = useCategoriesContext();
    const { userData, logout } = useUserContext();

    return (
        <Wrapper>
            <main className="dashboard">
                <SmallSidebar />
                <BigSidebar />
                <div>
                    <button className="btn-toggle" onClick={toggleSidebar}>
                        <CiBoxList />
                    </button>
                    <div className="dashboard-page">
                        <Outlet />
                        <img src={background} alt="background" className="background-image" />
                    </div>
                </div>

                <button className="big-btn-logout" onClick={logout}>
                    <span>
                        <CiUser />
                    </span>
                    <div>
                        <p className="name">{userData.name}</p>
                        <CiLogout className="turn-off" />
                    </div>
                </button>

                <button className="small-btn-logout" onClick={logout}>
                    <CiLogout className="turn-off" />
                </button>
            </main>
        </Wrapper>
    );
}

export default SharedLayout;
