import React from 'react';
import { Outlet } from 'react-router-dom';
import SmallSidebar from '../components/SmallSidebar';
import BigSidebar from '../components/BigSidebar';
import Wrapper from '../assets/wrappers/SharedLayout';
import { CgMenuGridO } from 'react-icons/cg';
import { CiPower, CiUser } from 'react-icons/ci';
import background from '../assets/images/background.png';
import { useCategoriesContext } from '../context/CategoriesContext';
import { useUserContext } from '../context/UserContext';
import { useGroupContext } from '../context/GroupContext';

function SharedLayout() {
    const { toggleSidebar } = useCategoriesContext();
    const { logout } = useUserContext();
    const { group } = useGroupContext();

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
                        <CiUser />
                    </span>

                    {group.owner ? (
                        <p>
                            {group.owner.name} <CiPower className="turn-off" />
                        </p>
                    ) : null}
                </button>
            </main>
        </Wrapper>
    );
}

export default SharedLayout;
