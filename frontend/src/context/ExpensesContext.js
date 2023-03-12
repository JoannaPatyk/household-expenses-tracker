import React, { createContext, useReducer, useEffect, useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ADD_EXPENSE, ADD_EXPENSES, UPDATE_EXPENSE, DELETE_EXPENSE, UPDATE_NAME_CATEGORY } from '../utils/Actions';
import apiConfig from '../apiConfig';
import reducer from '../reducers/ExpensesReducer';
import { useCategoriesContext } from './CategoriesContext';
import { useUserContext } from './UserContext';
import handleError from '../utils/ErrorHandling';

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
            handleError(error);
        }
    }, []);

    useEffect(() => {
        if (isLogged) {
            fetchExpenses();
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
            fetchExpenses();
            return true;
        } catch (error) {
            return false;
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

            return true;
        } catch (error) {
            return false;
        }
    };

    const deleteExpense = async (id) => {
        try {
            await axios.delete(`${apiConfig.api}/expenses/${id}`);
            dispatch({ type: DELETE_EXPENSE, payload: id });

            return true;
        } catch (error) {
            return false;
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
