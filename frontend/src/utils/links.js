import React from 'react';
import { VscGraph, VscPerson, VscGear } from 'react-icons/vsc';
import { GiTakeMyMoney, GiPayMoney } from 'react-icons/gi';

const links = [
    { id: 1, text: 'statystyki', path: '/', icon: <VscGraph /> },
    { id: 2, text: 'profil', path: 'profile', icon: <VscPerson /> },
    { id: 3, text: 'budżet', path: 'budget', icon: <GiTakeMyMoney /> },
    { id: 4, text: 'wydatki', path: 'expenses', icon: <GiPayMoney /> },
    { id: 5, text: 'ustawienia', path: 'settings', icon: <VscGear /> }
];

export default links;
