import PropTypes from 'prop-types';
import React, { createContext, useReducer, useEffect, useContext, useState } from 'react';
import { ADD_EXPENSE, ADD_EXPENSES, UPDATE_EXPENSE, DELETE_EXPENSE, UPDATE_NAME_CATEGORY } from '../utils/actions';
import reducer from '../reducers/ExpensesReducer';
import apiConfig from '../apiConfig';
import { useCategoriesContext } from './CategoriesContext';

const initialState = {
    expenses: []
};

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { categories } = useCategoriesContext();
    const [expenseForEdit, setExpenseForEdit] = useState({
        expense: {},
        edit: false
    });

    useEffect(() => {
        const getDataInterval = setInterval(async () => {
            const response = await fetch(`${apiConfig.api}/expenses`);
            const data = await response.json();
            addAllExpenses(data);
        }, 1000);

        return () => {
            clearInterval(getDataInterval);
        };
    }, [categories]);

    const addAllExpenses = (expenses) => {
        dispatch({ type: ADD_EXPENSES, payload: expenses });
    };

    const addExpense = async (category, amount, comment) => {
        await fetch(`${apiConfig.api}/expenses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category, amount, comment })
        });

        dispatch({ type: ADD_EXPENSE, payload: { category, amount, comment } });
    };

    const updateExpense = async (id, updateCategory, updateAmount, updateComment) => {
        await fetch(`${apiConfig.api}/expenses/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category: updateCategory, amount: updateAmount, comment: updateComment })
        });

        dispatch({
            type: UPDATE_EXPENSE,
            payload: { id, updateCategory, updateAmount, updateComment }
        });
        setExpenseForEdit({
            expense: {},
            edit: false
        });
    };

    const deleteExpense = async (id) => {
        await fetch(`${apiConfig.api}/expenses/${id}`, {
            method: 'DELETE'
        });

        dispatch({ type: DELETE_EXPENSE, payload: id });
    };

    const updateNameCategory = (oldName, updateName) => {
        dispatch({ type: UPDATE_NAME_CATEGORY, payload: { oldName, updateName } });
    };

    const saveExpenseForEdit = (expense) => {
        setExpenseForEdit({
            expense,
            edit: true
        });
    };

    return (
        <ExpensesContext.Provider
            value={{
                ...state,
                expenseForEdit,
                saveExpenseForEdit,
                addExpense,
                addAllExpenses,
                updateExpense,
                updateNameCategory,
                deleteExpense
            }}
        >
            {children}
        </ExpensesContext.Provider>
    );
};

ExpensesProvider.propTypes = {
    children: PropTypes.any.isRequired
};

export const useExpensesContext = () => {
    return useContext(ExpensesContext);
};
