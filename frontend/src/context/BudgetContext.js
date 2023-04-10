import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ADD_BUDGET, UPDATE_BUDGET, CLEAR_BUDGET } from '../utils/Actions';
import reducer from '../reducers/BudgetReducer';
import apiConfig from '../apiConfig';
import handleError from '../utils/ErrorHandling';
import { useExpensesContext } from './ExpensesContext';
import { useCategoriesContext } from './CategoriesContext';
import { useUserContext } from './UserContext';

const initialState = {
    budget: []
};

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [summedExpensesByCategory, setSummedExpensesByCategory] = useState([]);
    const [summedPlanned, setSummedPlanned] = useState(0);
    const [summedSpent, setSummedSpent] = useState(0);

    const { expenses } = useExpensesContext();
    const { categories } = useCategoriesContext();
    const { isLogged } = useUserContext();

    useEffect(() => {
        let source = axios.CancelToken.source();

        const fetchBudget = async () => {
            try {
                const response = await axios.get(`${apiConfig.api}/budget`);
                const data = response.data;
                dispatch({ type: ADD_BUDGET, payload: data });
            } catch (error) {
                handleError(error);
            }
        };

        if (isLogged) {
            fetchBudget();
        }

        return () => source.cancel();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories]);

    useEffect(() => {
        const sumAllBudget = () => {
            const budget = state.budget;

            if (budget.length === 0) {
                return 0;
            }

            const sum = budget.map((item) => parseInt(item.amount)).reduce((acc, curr) => acc + curr, 0);
            setSummedPlanned(sum);

            return sum;
        };

        setSummedExpensesByCategory(sumExpensesInBudgetByCategory(expenses, 'category', 'amount'));
        sumAllBudget();
    }, [expenses, state.budget]);

    const updateBudget = async (id, updateBudgetEntryAmount) => {
        try {
            await axios.patch(`${apiConfig.api}/budget/${id}`, { amount: updateBudgetEntryAmount });
            dispatch({ type: UPDATE_BUDGET, payload: { id, updateBudgetEntryAmount } });

            return true;
        } catch (error) {
            return false;
        }
    };

    const deleteBudget = async () => {
        try {
            await axios.patch(`${apiConfig.api}/budget`);
            dispatch({ type: CLEAR_BUDGET });

            return true;
        } catch (error) {
            return false;
        }
    };

    const sumExpensesInBudgetByCategory = (expenses, key, value) => {
        const map = new Map();
        for (const expense of expenses) {
            const sum = map.get(expense[key]) || 0;
            map.set(expense[key], sum + expense[value]);
        }

        let arrayOfSumExpensesInBudgetByCategory = Array.from(map, ([k, v]) => ({
            [key]: k,
            [value]: Math.round(v * 100) / 100
        }));

        let arrayOfAmountFromSummedExpensesInBudgetByCategory = arrayOfSumExpensesInBudgetByCategory.map(
            (item) => item.amount
        );

        const sumAllAmount = arrayOfAmountFromSummedExpensesInBudgetByCategory.reduce((a, b) => a + b, 0);
        setSummedSpent(sumAllAmount);

        return arrayOfSumExpensesInBudgetByCategory;
    };

    return (
        <BudgetContext.Provider
            value={{
                ...state,
                summedExpensesByCategory,
                updateBudget,
                deleteBudget,
                sumExpensesInBudgetByCategory,
                summedSpent,
                summedPlanned
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
