import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import FormRowInput from './FormRowInput';
import FormRowSelect from './FormRowSelect';
import Wrapper from '../assets/wrappers/ExpensesForm';
import { useExpensesContext } from '../context/ExpensesContext';
import { useCategoriesContext } from '../context/CategoriesContext';

function ExpensesForm() {
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

    const handleCategoryChange = (event) => {
        if (event.target.value === '' || newAmount === '' || newAmount <= 0) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }

        setNewCategory(event.target.value);
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
                <div className="categories-container">
                    <h2>Dodaj nowy wydatek</h2>
                    <FormRowSelect
                        firstOption="dostępne kategorie"
                        id="select"
                        list={[...categories]}
                        onChange={handleCategoryChange}
                    />
                </div>
                <div className="expense-container">
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
                </div>
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

export default ExpensesForm;
