import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, FormRowInput, FormRowSelect } from './';
import Wrapper from '../assets/wrappers/ExpensesForm';
import { useExpensesContext } from '../context/ExpensesContext';
import { useCategoriesContext } from '../context/CategoriesContext';

function ExpensesForm({ theme }) {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [newCategory, setNewCategory] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newComment, setNewComment] = useState('');
    const { categories } = useCategoriesContext();
    const { addExpense } = useExpensesContext();

    const handleAmountChange = (event) => {
        if (event.target.value === '' || event.target.value <= 0 || newCategory === '') {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }

        setNewAmount(event.target.value);
    };

    const handleCategoryChange = (option) => {
        if (option.value === '' || newAmount === '' || newAmount <= 0) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }

        setNewCategory(option.value);
    };

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        addExpense(newCategory, newAmount, newComment);
        setNewAmount('');
        setNewComment('');
        setButtonDisabled(true);
    };

    return (
        <Wrapper>
            <form id="form" className="form-container" onSubmit={handleSubmit}>
                <h2>Dodaj nowy wydatek</h2>
                <FormRowSelect
                    id="categorySelect"
                    list={[...categories]}
                    theme={theme}
                    onChange={handleCategoryChange}
                />
                <FormRowInput
                    id="amountInput"
                    value={newAmount}
                    type="number"
                    placeholder="wydana kwota"
                    onChange={handleAmountChange}
                />
                <FormRowInput
                    id="commentInput"
                    value={newComment}
                    type="text"
                    placeholder="komentarz"
                    onChange={handleCommentChange}
                />
                <Button type="submit" version="hero" isDisabled={buttonDisabled}>
                    dodaj
                </Button>
                <Link to="/edit_category" className="btn btn-hipster">
                    edytuj kategorie
                </Link>
            </form>
        </Wrapper>
    );
}

ExpensesForm.propTypes = {
    theme: PropTypes.string
};

export default ExpensesForm;
