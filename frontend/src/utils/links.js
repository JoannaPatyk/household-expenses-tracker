import React from 'react';
import { VscGraph } from 'react-icons/vsc';
import { MdPlaylistAdd } from 'react-icons/md';
import { GiTakeMyMoney, GiPayMoney } from 'react-icons/gi';
import { HiOutlineUserGroup } from 'react-icons/hi';

const links = [
    { id: 1, text: 'dodaj wydatek', path: 'add', icon: <MdPlaylistAdd /> },
    { id: 2, text: 'lista wydatków', path: 'expenses', icon: <GiPayMoney /> },
    { id: 3, text: 'budżet', path: 'budget', icon: <GiTakeMyMoney /> },
    { id: 4, text: 'statystyki', path: 'statistics', icon: <VscGraph /> },
    { id: 5, text: 'zarządzaj grupę', path: 'group', icon: <HiOutlineUserGroup /> }
];

export default links;
