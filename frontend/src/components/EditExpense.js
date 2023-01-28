import React, { useState, useEffect } from 'react';
import Button from './Button';
import { TfiBackLeft } from 'react-icons/tfi';
import Wrapper from '../assets/wrappers/ExpensesForm';
import { useCategoriesContext } from '../context/CategoriesContext';
import { useExpensesContext } from '../context/ExpensesContext';

function EditExpense() {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const { categories, toggleModal } = useCategoriesContext();
    const { name, amount, comment, setName, setAmount, setComment, expenseForEdit, updateExpense } =
        useExpensesContext();

    useEffect(() => {
        if (expenseForEdit.edit === true) {
            setName(expenseForEdit.expense.name);
            setAmount(expenseForEdit.expense.amount);
            setComment(expenseForEdit.expense.comment);
        }
        // eslint-disable-next-line
    }, [expenseForEdit]);

    const handleNameChange = (event) => {
        const newName = event.target.value;

        setName(newName);
    };

    const handleAmountChange = (event) => {
        const newAmount = event.target.value;

        if (newAmount === '' || newAmount < 0) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }

        setAmount(newAmount);
    };

    const handleCommentChange = (event) => {
        const newComment = event.target.value;

        setComment(newComment);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (expenseForEdit.edit === true) {
            updateExpense(expenseForEdit.expense.id, name, amount, comment);
        }

        toggleModal();
        setAmount('');
        setComment('');
    };

    return (
        <Wrapper>
            <button onClick={() => toggleModal()}>
                <TfiBackLeft className="edit-btn edit" />
            </button>

            <form id="form" className="form-container" onSubmit={handleSubmit}>
                <div className="categories-container">
                    <h2>Edytuj wybrany wydatek</h2>
                    <label>
                        Zmień kategorię:
                        <select id="select" className="form-select" value={name} onChange={handleNameChange}>
                            {categories.map((category) => {
                                return (
                                    <option key={category.id} value={category.name}>
                                        {category.name}
                                    </option>
                                );
                            })}
                        </select>
                    </label>
                </div>
                <div className="expense-container">
                    <label>
                        Zmień kwotę:
                        <input
                            value={amount}
                            type="number"
                            className="form-input"
                            placeholder="wydana kwota"
                            onChange={handleAmountChange}
                        />
                    </label>
                    <label>
                        Zmień treść komentarza:
                        <input
                            value={comment}
                            type="text"
                            className="form-input"
                            placeholder="komentarz"
                            onChange={handleCommentChange}
                        />
                    </label>
                </div>
                <Button type="submit" version="hero" isDisabled={buttonDisabled}>
                    zapisz
                </Button>
            </form>
        </Wrapper>
    );
}

export default EditExpense;
