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
    const [newAmount, setNewAmount] = useState('');
    const [newComment, setNewComment] = useState('');
    const { categories } = useCategoriesContext();
    const { addExpense } = useExpensesContext();

    const handleAmountChange = (event) => {
        if (event.target.value === '' || event.target.value < 0) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }

        setNewAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedCategory = document.getElementById('select').value;

        addExpense(selectedCategory, newAmount, newComment);
        setNewAmount('');
        setNewComment('');
        setButtonDisabled(true);
    };

    return (
        <Wrapper>
            <form id="form" className="form-container" onSubmit={handleSubmit}>
                <div className="categories-container">
                    <h2>Dodaj nowy wydatek</h2>
                    <FormRowSelect firstOption="dostępne kategorie" id="select" list={[...categories]} />
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
                        onChange={(event) => setNewComment(event.target.value)}
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
