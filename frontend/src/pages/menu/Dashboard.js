import React, { useState, useEffect, useCallback } from 'react';
import Statistics from './Statistics';
import InformationPanel from '../../components/InformationPanel';
import Wrapper from '../../assets/wrappers/Dashboard';
import { useGroupContext } from '../../context/GroupContext';

function Dashboard() {
    const [date, setDate] = useState(new Date());
    const { group } = useGroupContext();
    const dateWithMonthAndYear = date.toLocaleDateString('pl-PL', { month: 'long', year: 'numeric' });
    const groupName = (group.name || 'Twoja grupa').toUpperCase();

    const tick = useCallback(() => {
        setDate(new Date());
    }, []);

    useEffect(() => {
        const timerID = setInterval(() => tick(), 60000);

        return () => clearInterval(timerID);
    }, [tick]);

    return (
        <Wrapper>
            <div className="dashboard-container">
                <div className="main-container">
                    <h1>{dateWithMonthAndYear}</h1>
                    <div className="group-container">
                        <h2>Nazwa grupy: {groupName}</h2>
                        <h5>
                            - jeśli jesteś nowym użytkownikiem, jesteś jedynym członkiem grupy. Jeśli chcesz edytować
                            grupę przejdź do zakładki "zarządzaj grupą".
                        </h5>
                    </div>
                </div>
                <InformationPanel />
                <Statistics />
            </div>
        </Wrapper>
    );
}

export default Dashboard;
