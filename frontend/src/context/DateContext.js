import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [startOfMonthUnixTime, setStartOfMonthUnixTime] = useState();
    const [endOfMonthUnixTime, setEndOfMonthUnixTime] = useState();

    const getCurrentDate = useCallback(() => {
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        return [month, year];
    }, []);

    useEffect(() => {
        const [month, year] = getCurrentDate();
        setMonth(month);
        setYear(year);
    }, [getCurrentDate]);

    useEffect(() => {
        const timerID = setInterval(() => {
            const [month, year] = getCurrentDate();
            setMonth(month);
            setYear(year);
        }, 60000);
        return () => clearInterval(timerID);
    }, [getCurrentDate]);

    useEffect(() => {
        const date = new Date(year, month - 1, 1);
        const startOfMonthUnixTime = date.getTime() / 1000;

        date.setMonth(month);
        date.setDate(0);
        const endOfMonthUnixTime = date.getTime() / 1000;

        setStartOfMonthUnixTime(startOfMonthUnixTime);
        setEndOfMonthUnixTime(endOfMonthUnixTime);
    }, [month, year]);

    return (
        <DateContext.Provider
            value={{
                month,
                setMonth,
                year,
                setYear,
                startOfMonthUnixTime,
                endOfMonthUnixTime
            }}
        >
            {children}
        </DateContext.Provider>
    );
};

DateProvider.propTypes = {
    children: PropTypes.any.isRequired
};

export const useDateContext = () => {
    return useContext(DateContext);
};
