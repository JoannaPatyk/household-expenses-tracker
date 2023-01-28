import md5 from 'md5';
import PropTypes from 'prop-types';
import React, { createContext, useReducer, useContext, useState } from 'react';
import { ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE, UPDATE_NAME_CATEGORY } from '../utils/actions';
import reducer from '../reducers/ExpensesReducer';

const initialState = {
    expenses: [
        {
            id: md5(`'mieszkanie' + '1200' + 'Komentarz pierwszy'`),
            name: 'mieszkanie',
            amount: '1200',
            comment: 'Komentarz pierwszy'
        },
        { id: md5(`'zakupy' + '150' + 'Komentarz drugi'`), name: 'zakupy', amount: '150', comment: 'Komentarz drugi' },
        {
            id: md5(`'transport' + '40' + 'Komentarz trzeci'`),
            name: 'transport',
            amount: '40',
            comment: 'Komentarz trzeci'
        },
        { id: md5(`'rozrywka' + '180' + ''`), name: 'zakupy', amount: '180', comment: '' },
        { id: md5(`'transport' + '500' + 'Komentarz XYZ'`), name: 'transport', amount: '500', comment: 'Komentarz XYZ' }
    ]
};

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [comment, setComment] = useState('');

    const [expenseForEdit, setExpenseForEdit] = useState({
        expense: {},
        edit: false
    });

    const addExpense = (name, amount, comment) => {
        dispatch({ type: ADD_EXPENSE, payload: { name, amount, comment } });
    };

    const updateExpense = (id, updateName, updateAmount, updateComment) => {
        dispatch({ type: UPDATE_EXPENSE, payload: { id, updateName, updateAmount, updateComment } });
        setExpenseForEdit({
            expense: {},
            edit: false
        });
    };

    const updateNameCategory = (oldName, updateName) => {
        dispatch({ type: UPDATE_NAME_CATEGORY, payload: { oldName, updateName } });
    };

    const deleteExpense = (id) => {
        dispatch({ type: DELETE_EXPENSE, payload: id });
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
                name,
                amount,
                comment,
                expenseForEdit,
                setName,
                setAmount,
                setComment,
                saveExpenseForEdit,
                addExpense,
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
