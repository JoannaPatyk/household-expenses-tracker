import React from 'react';
import { Outlet } from 'react-router-dom';
import { SmallSidebar, BigSidebar } from '../components';
import Wrapper from '../assets/wrappers/SharedLayout';
import background from '../assets/images/background.png';
import { CiPower, CiUser, CiBoxList } from 'react-icons/ci';
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
                        <CiBoxList />
                    </button>
                    <div className="dashboard-page">
                        <Outlet />
                        <img src={background} alt="background" className="background-image" />
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
