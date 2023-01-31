import React, { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ADD_BUDGET, UPDATE_BUDGET } from '../utils/actions';
import reducer from '../reducers/BudgetReducer';
import apiConfig from '../apiConfig';
import { useCategoriesContext } from './CategoriesContext';

const initialState = {
    budget: []
};

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { categories } = useCategoriesContext();

    const fetchBudget = async () => {
        const response = await fetch(`${apiConfig.api}/budget`);
        const data = await response.json();
        dispatch({ type: ADD_BUDGET, payload: data });
    };

    useEffect(() => {
        fetchBudget();
    }, [categories]);

    const updateBudget = async (id, updateBudgetEntryAmount) => {
        await fetch(`${apiConfig.api}/budget/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: updateBudgetEntryAmount })
        });

        dispatch({ type: UPDATE_BUDGET, payload: { id, updateBudgetEntryAmount } });
    };

    const sumBudgetByCategory = (expenses, key, value) => {
        const map = new Map();
        for (const expense of expenses) {
            const sum = map.get(expense[key]) || 0;
            map.set(expense[key], sum + expense[value]);
        }

        return Array.from(map, ([k, v]) => ({ [key]: k, [value]: v }));
    };

    return (
        <BudgetContext.Provider
            value={{
                ...state,
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
