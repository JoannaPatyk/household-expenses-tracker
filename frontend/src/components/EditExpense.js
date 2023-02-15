import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { TfiBackLeft } from 'react-icons/tfi';
import Wrapper from '../assets/wrappers/ExpensesForm';
import FormRowInput from './FormRowInput';
import FormRowSelect from './FormRowSelect';
import { useCategoriesContext } from '../context/CategoriesContext';
import { useExpensesContext } from '../context/ExpensesContext';

function EditExpense() {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [editCategory, setEditCategory] = useState('');
    const [editAmount, setEditAmount] = useState('');
    const [editComment, setEditComment] = useState('');
    const navigate = useNavigate();
    const { categories } = useCategoriesContext();
    const { expenseForEdit, updateExpense } = useExpensesContext();

    useEffect(() => {
        if (expenseForEdit.edit === true) {
            setButtonDisabled(false);
            setEditCategory(expenseForEdit.expense.category);
            setEditAmount(expenseForEdit.expense.amount);
            setEditComment(expenseForEdit.expense.comment);
        }
        // eslint-disable-next-line
    }, [expenseForEdit]);

    const handleCategoryChange = (event) => {
        setEditCategory(event.target.value);
        setButtonDisabled(false);
    };

    const handleAmountChange = (event) => {
        if (event.target.value === '' || event.target.value < 0) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
        setEditAmount(event.target.value);
    };

    const handleCommentChange = (event) => {
        setEditComment(event.target.value);
        setButtonDisabled(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (expenseForEdit.edit === true) {
            updateExpense(expenseForEdit.expense.id, editCategory, editAmount, editComment);
            navigate('/expenses');
        }
    };

    return (
        <Wrapper>
            <Link to="/expenses" className="btn-back">
                <TfiBackLeft />
            </Link>
            <div className="container">
                <form id="form" className="form-container" onSubmit={handleSubmit}>
                    <div className="categories-container">
                        <h2>Edytuj wybrany wydatek</h2>
                        <FormRowSelect
                            id="select"
                            list={[...categories]}
                            name={expenseForEdit.expense.category}
                            onChange={handleCategoryChange}
                        />
                    </div>

                    <div className="expense-container">
                        <FormRowInput
                            id="amount"
                            value={editAmount}
                            type="number"
                            placeholder="wydana kwota"
                            onChange={handleAmountChange}
                        />
                        <FormRowInput
                            id="comment"
                            value={editComment}
                            type="text"
                            placeholder="komentarz"
                            onChange={handleCommentChange}
                        />
                    </div>
                    <Button type="submit" version="hero" isDisabled={buttonDisabled}>
                        zapisz
                    </Button>
                </form>
            </div>
        </Wrapper>
    );
}

export default EditExpense;
