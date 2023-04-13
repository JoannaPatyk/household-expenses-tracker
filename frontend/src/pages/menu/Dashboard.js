import React from 'react';
import Statistics from './Statistics';
import InformationPanel from '../../components/InformationPanel';
import Wrapper from '../../assets/wrappers/Dashboard';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useGroupContext } from '../../context/GroupContext';
import { useDateContext } from '../../context/DateContext';

function Dashboard() {
    const { group } = useGroupContext();
    const groupName = (group.name || 'Twoja grupa').toUpperCase();

    const { month, setMonth, year, setYear } = useDateContext();
    let selectedDate = `${month < 10 ? `0${month}` : month}.${year}`;

    const increase = () => {
        let newMonth = month + 1;

        if (newMonth > 12) {
            setMonth(1);
            setYear(year + 1);
        } else {
            setMonth(newMonth);
        }
    };

    const decrease = () => {
        let newMonth = month - 1;

        if (newMonth < 1) {
            setMonth(12);
            setYear(year - 1);
        } else {
            setMonth(newMonth);
        }
    };
    return (
        <Wrapper>
            <div className="dashboard-container">
                <div className="main-container">
                    <div className="date-container">
                        <button type="button" className="btn btn-toggle left" onClick={decrease}>
                            <SlArrowLeft />
                        </button>
                        <h1>{selectedDate}</h1>
                        <button type="button" className="btn btn-toggle right" onClick={increase}>
                            <SlArrowRight />
                        </button>
                    </div>

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
