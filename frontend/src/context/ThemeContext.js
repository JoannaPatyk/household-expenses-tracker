import React, { useContext, useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

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

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
    children: PropTypes.any.isRequired
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
