import React from 'react';
import { TfiStatsUp } from 'react-icons/tfi';
import { CiCalculator2 } from 'react-icons/ci';
import { GiTakeMyMoney, GiPayMoney } from 'react-icons/gi';
import { GiFamilyTree } from 'react-icons/gi';

const links = [
    { id: 1, text: 'dodaj wydatek', path: 'add', icon: <CiCalculator2 /> },
    { id: 2, text: 'lista wydatków', path: 'expenses', icon: <GiPayMoney /> },
    { id: 3, text: 'budżet', path: 'budget', icon: <GiTakeMyMoney /> },
    { id: 4, text: 'statystyki', path: 'statistics', icon: <TfiStatsUp /> },
    { id: 5, text: 'zarządzaj grupę', path: 'group', icon: <GiFamilyTree /> }
];

export default links;
