import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ADD_BUDGET, UPDATE_BUDGET } from '../utils/Actions';
import reducer from '../reducers/BudgetReducer';
import apiConfig from '../apiConfig';
import { useExpensesContext } from './ExpensesContext';
import { useCategoriesContext } from './CategoriesContext';
import { useUserContext } from './UserContext';
import { trackPromise } from 'react-promise-tracker';

const initialState = {
    budget: []
};

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [summedByCategory, setSummedByCategory] = useState([]);
    const { expenses } = useExpensesContext();
    const { categories } = useCategoriesContext();
    const { isLogged } = useUserContext();

    useEffect(() => {
        const fetchBudget = async () => {
            try {
                const response = await axios.get(`${apiConfig.api}/budget`);

                const data = response.data;
                dispatch({ type: ADD_BUDGET, payload: data });
            } catch (error) {
                console.error('error: ', error.response);
            }
        };

        if (isLogged) {
            trackPromise(fetchBudget());
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories]);

    useEffect(() => {
        setSummedByCategory(sumBudgetByCategory(expenses, 'category', 'amount'));
    }, [expenses]);

    const updateBudget = async (id, updateBudgetEntryAmount) => {
        try {
            await axios.patch(`${apiConfig.api}/budget/${id}`, { amount: updateBudgetEntryAmount });
            dispatch({ type: UPDATE_BUDGET, payload: { id, updateBudgetEntryAmount } });

            return true;
        } catch (error) {
            console.error('error: ', error.response);
            return false;
        }
    };

    const sumBudgetByCategory = (expenses, key, value) => {
        const map = new Map();
        for (const expense of expenses) {
            const sum = map.get(expense[key]) || 0;
            map.set(expense[key], sum + expense[value]);
        }

        return Array.from(map, ([k, v]) => ({ [key]: k, [value]: Math.round(v * 100) / 100 }));
    };

    return (
        <BudgetContext.Provider
            value={{
                ...state,
                summedByCategory,
                updateBudget,
                sumBudgetByCategory
            }}
        >
            {children}
        </BudgetContext.Provider>
    );
};

BudgetProvider.propTypes = {
    children: PropTypes.any.isRequired
};

export const useBudgetContext = () => {
    return useContext(BudgetContext);
};
