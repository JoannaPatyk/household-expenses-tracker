import React from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { useThemeContext } from '../context/ThemeContext';

function ThemeSwitch() {
    const { theme, toggleTheme } = useThemeContext();
    const moonIcon = <BsMoonStars className="moon slider-icon" />;
    const sunIcon = <BsSun className="sun slider-icon" />;

    return (
        <div className={`switch-wrapper ${theme}`}>
            <label className="switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={toggleTheme} />
                <div className="slider round">{theme === 'dark' ? moonIcon : sunIcon}</div>
            </label>
        </div>
    );
}

export default ThemeSwitch;
