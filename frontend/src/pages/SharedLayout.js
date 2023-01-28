import React from 'react';
import { useState } from 'react';
import SmallSidebar from '../components/SmallSidebar';
import BigSidebar from '../components/BigSidebar';
import Navbar from '../components/Navbar';
import ExpensesForm from '../components/ExpensesForm';
import Wrapper from '../assets/wrappers/SharedLayout';

function SharedLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Wrapper>
            <main className="dashboard">
                <SmallSidebar toggle={toggle} isSidebarOpen={isSidebarOpen} />
                <BigSidebar toggle={toggle} isSidebarOpen={isSidebarOpen} />
                <div className="container">
                    <Navbar toggle={toggle} />
                    <ExpensesForm />
                </div>
            </main>
        </Wrapper>
    );
}

export default SharedLayout;
