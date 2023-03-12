import React from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { useThemeContext } from '../context/ThemeContext';

function ThemeSwitch() {
    const { theme, toggleTheme } = useThemeContext();
    return (
        <div className={`switch-wrapper ${theme}`}>
            <label className="switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={toggleTheme} />
                <div className="slider round">
                    <BsMoonStars className="moon slider-icon" />
                    <BsSun className="sun slider-icon" />
                </div>
            </label>
        </div>
    );
}

export default ThemeSwitch;
