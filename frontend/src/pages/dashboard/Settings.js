import React, { useState, useEffect } from 'react';
import Wrapper from '../../assets/wrappers/Settings';

function Settings() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    return (
        <Wrapper>
            <div className={`App ${theme}`}>
                <div className="switch-wrapper">
                    <p>Zmień motyw:</p>
                    <label className="switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" onChange={toggleTheme} />
                        <div className="slider round"></div>
                    </label>
                </div>
            </div>
        </Wrapper>
    );
}

export default Settings;
