import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import links from '../utils/Links';

function NavLinksForSmallSidebar({ handleToggle }) {
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
                        onClick={handleToggle}
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

NavLinksForSmallSidebar.propTypes = {
    handleToggle: PropTypes.any.isRequired
};

export default NavLinksForSmallSidebar;
