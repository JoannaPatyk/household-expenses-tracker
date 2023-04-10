import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../utils/Links';

function NavLinksForBigSidebar() {
    return (
        <div className="nav-links">
            {links.map(({ text, path, id, icon }) => {
                return (
                    <NavLink
                        to={path}
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
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

export default NavLinksForBigSidebar;
