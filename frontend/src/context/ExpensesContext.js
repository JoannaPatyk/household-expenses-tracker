import React, { createContext, useReducer, useEffect, useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ADD_EXPENSE, ADD_EXPENSES, UPDATE_EXPENSE, DELETE_EXPENSE, UPDATE_NAME_CATEGORY } from '../utils/actions';
import reducer from '../reducers/ExpensesReducer';
import apiConfig from '../apiConfig';
import { useCategoriesContext } from './CategoriesContext';
import { useUserContext } from './UserContext';
import { trackPromise } from 'react-promise-tracker';

const initialState = {
    expenses: []
};

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { categories } = useCategoriesContext();
    const { isLogged } = useUserContext();
    const [expenseForEdit, setExpenseForEdit] = useState({
        expense: {},
        edit: false
    });

    const fetchExpenses = useCallback(async () => {
        try {
            const response = await axios.get(`${apiConfig.api}/expenses`);

            const data = response.data;
            addAllExpenses(data);
        } catch (error) {
            console.error('error: ', error.response);
        }
    }, []);

    useEffect(() => {
        if (isLogged) {
            trackPromise(fetchExpenses());
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories, fetchExpenses]);

    const addAllExpenses = (expenses) => {
        dispatch({ type: ADD_EXPENSES, payload: expenses });
    };

    const addExpense = async (category, amount, comment) => {
        try {
            await axios.post(`${apiConfig.api}/expenses`, { category, amount, comment });
            dispatch({ type: ADD_EXPENSE, payload: { category, amount, comment } });
            trackPromise(fetchExpenses());
        } catch (error) {
            console.error('error: ', error.response);
        }
    };

    const updateExpense = async (id, updateCategory, updateAmount, updateComment) => {
        try {
            await axios.patch(`${apiConfig.api}/expenses/${id}`, {
                category: updateCategory,
                amount: updateAmount,
                comment: updateComment
            });

            dispatch({
                type: UPDATE_EXPENSE,
                payload: { id, updateCategory, updateAmount, updateComment }
            });
            setExpenseForEdit({
                expense: {},
                edit: false
            });
        } catch (error) {
            console.error('error: ', error.response);
        }
    };

    const deleteExpense = async (id) => {
        try {
            await axios.delete(`${apiConfig.api}/expenses/${id}`);
            dispatch({ type: DELETE_EXPENSE, payload: id });
        } catch (error) {
            console.error('error: ', error.response);
        }
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
