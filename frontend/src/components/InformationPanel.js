import React from 'react';
import Wrapper from '../assets/wrappers/InformationPanel';
import { Link } from 'react-router-dom';
import { GiPayMoney, GiTakeMyMoney, GiReceiveMoney } from 'react-icons/gi';
import { useBudgetContext } from '../context/BudgetContext';
import InfoBoxes from '../components/InfoBoxes';

function InformationPanel() {
    const { summedSpent, summedPlanned } = useBudgetContext();

    const balance = summedPlanned - summedSpent;

    const changeColor = balance < 0 ? 'minus' : 'plus';
    const takeIcon = <GiTakeMyMoney className="edit icon" />;
    const payIcon = <GiPayMoney className="icon" />;
    const receiveIcon = <GiReceiveMoney className="icon" />;

    return (
        <Wrapper>
            <div className="panel-container">
                <Link to="/budget">
                    <InfoBoxes title="planowane" icon={takeIcon} amount={summedPlanned} />
                </Link>
                <InfoBoxes title="poniesione" icon={payIcon} amount={summedSpent} />
                <InfoBoxes title="saldo" icon={receiveIcon} amount={balance} version={changeColor} />
            </div>
        </Wrapper>
    );
}

export default InformationPanel;
