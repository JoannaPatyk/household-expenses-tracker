import React from 'react';
import { TfiStatsUp } from 'react-icons/tfi';
import { CiCalculator2, CiZoomIn } from 'react-icons/ci';
import { GiTakeMyMoney, GiPayMoney } from 'react-icons/gi';
import { GiFamilyTree } from 'react-icons/gi';

const links = [
    { id: 1, text: 'menu główne', path: 'dashboard', icon: <TfiStatsUp /> },
    { id: 2, text: 'dodaj wydatek', path: 'add', icon: <CiCalculator2 /> },
    { id: 3, text: 'lista kategorii', path: 'categories', icon: <CiZoomIn /> },
    { id: 4, text: 'lista wydatków', path: 'expenses', icon: <GiPayMoney /> },
    { id: 5, text: 'zaplanuj wydatki', path: 'budget', icon: <GiTakeMyMoney /> },
    { id: 6, text: 'zarządzaj grupą', path: 'group', icon: <GiFamilyTree /> }
];

export default links;
