import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../utils/Links';
import { useCategoriesContext } from '../context/CategoriesContext';

function NavLinksForSmallSidebar() {
    const { toggleSidebar } = useCategoriesContext();
    return (
        <div className="nav-links">
            {links.map((link) => {
                const { text, path, id, icon } = link;
                return (
                    <NavLink
                        to={path}
                        className={({ isActive }) => {
                            return isActive ? 'nav-link active' : 'nav-link';
                        }}
                        onClick={toggleSidebar}
                        key={id}
                        end
                    >
                        <span className="icon">{icon}</span>
                        <p>{text}</p>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default NavLinksForSmallSidebar;
