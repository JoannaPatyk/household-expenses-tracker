import React from 'react';
import { TfiStatsUp } from 'react-icons/tfi';
import { CiCalculator2, CiZoomIn } from 'react-icons/ci';
import { GiTakeMyMoney, GiPayMoney } from 'react-icons/gi';
import { GiFamilyTree } from 'react-icons/gi';

const links = [
    { id: 1, text: 'dodaj wydatek', path: 'add', icon: <CiCalculator2 /> },
    { id: 2, text: 'lista kategorii', path: 'categories', icon: <CiZoomIn /> },
    { id: 3, text: 'lista wydatków', path: 'expenses', icon: <GiPayMoney /> },
    { id: 4, text: 'zaplanuj wydatki', path: 'budget', icon: <GiTakeMyMoney /> },
    { id: 5, text: 'statystyki', path: 'statistics', icon: <TfiStatsUp /> },
    { id: 6, text: 'zarządzaj grupą', path: 'group', icon: <GiFamilyTree /> }
];

export default links;
