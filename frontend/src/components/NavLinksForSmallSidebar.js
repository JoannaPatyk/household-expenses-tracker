import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import links from '../utils/Links';

function NavLinksForSmallSidebar({ handleToggle }) {
    const handleClick = useCallback(() => {
        handleToggle();
    }, [handleToggle]);

    return (
        <div className="nav-links">
            {links.map(({ text, path, id, icon }) => {
                return (
                    <NavLink
                        to={path}
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        onClick={handleClick}
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
    handleToggle: PropTypes.func.isRequired
};

export default NavLinksForSmallSidebar;
