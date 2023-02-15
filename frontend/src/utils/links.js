import React from 'react';
import { VscGraph } from 'react-icons/vsc';
import { MdPlaylistAdd } from 'react-icons/md';
import { GiTakeMyMoney, GiPayMoney } from 'react-icons/gi';

const links = [
    { id: 1, text: 'Dodaj wydatek', path: 'add', icon: <MdPlaylistAdd /> },
    { id: 2, text: 'lista wydatków', path: 'expenses', icon: <GiPayMoney /> },
    { id: 3, text: 'budżet', path: 'budget', icon: <GiTakeMyMoney /> },
    { id: 4, text: 'statystyki', path: 'statistics', icon: <VscGraph /> }
];

export default links;
