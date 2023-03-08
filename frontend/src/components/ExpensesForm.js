import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, FormRowInput, FormRowSelect } from './';
import Wrapper from '../assets/wrappers/ExpensesForm';
import { useExpensesContext } from '../context/ExpensesContext';
import { useCategoriesContext } from '../context/CategoriesContext';
import notification, { SUCCESS, INFO, ERROR } from '../utils/Notification';

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

    const handleMenuOpen = () => {
        if (categories.length === 0) {
            notification(INFO, 'Lista jest pusta, dodaj kategorie');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const result = await addExpense(newCategory, newAmount, newComment);
        if (result) {
            notification(SUCCESS, `Dodano wydatek: ${newCategory} - ${newAmount} PLN`);

            setNewAmount('');
            setNewComment('');
            setButtonDisabled(true);
        } else {
            notification(ERROR, 'Coś poszło nie tak, spróbuj ponownie');
        }
    };

    return (
        <Wrapper>
            <form id="form" className="form-container" onSubmit={handleSubmit}>
                <h2>Dodaj nowy wydatek</h2>
                <FormRowSelect
                    id="categorySelect"
                    options={categories.map((item) => {
                        return {
                            value: item.name,
                            label: item.name
                        };
                    })}
                    defaultValue={{ value: categories[0], label: categories[0] }}
                    theme={theme}
                    placeholder="wyszukaj lub wybierz kategorię"
                    noOptionsMessage={() => 'brak kategorii'}
                    onChange={handleCategoryChange}
                    onMenuOpen={handleMenuOpen}
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
                    dodaj wydatek
                </Button>
                <Link to="/categories" className="btn btn-edit btn-hipster">
                    dodaj lub edytuj kategorie
                </Link>
            </form>
        </Wrapper>
    );
}

ExpensesForm.propTypes = {
    theme: PropTypes.string
};

export default ExpensesForm;
