import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, FormRowInput, FormRowSelect, Logo } from './IndexComponents';
import { TfiBackLeft } from 'react-icons/tfi';
import Wrapper from '../assets/wrappers/EditExpenses';
import background from '../assets/images/background.png';
import { useCategoriesContext } from '../context/CategoriesContext';
import { useExpensesContext } from '../context/ExpensesContext';
import notification, { SUCCESS, ERROR } from '../utils/Notification';
import { useThemeContext } from '../context/ThemeContext';

function EditExpense() {
    const navigate = useNavigate();
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [editCategory, setEditCategory] = useState(null);
    const [editAmount, setEditAmount] = useState('');
    const [editComment, setEditComment] = useState('');
    const { categories } = useCategoriesContext();
    const { expenseForEdit, updateExpense } = useExpensesContext();
    const { theme } = useThemeContext();

    useEffect(() => {
        if (expenseForEdit.edit === true) {
            setButtonDisabled(false);
            setEditCategory(expenseForEdit.expense.category);
            setEditAmount(expenseForEdit.expense.amount);
            setEditComment(expenseForEdit.expense.comment);
        }
    }, [expenseForEdit]);

    const handleCategoryChange = (selected) => {
        setEditCategory(selected.value);
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (expenseForEdit.edit === true) {
            const result = await updateExpense(expenseForEdit.expense.id, editCategory, editAmount, editComment);
            if (result) {
                navigate('/expenses');
                notification(
                    SUCCESS,
                    `Edytowano wydatek: ${expenseForEdit.expense.category} - ${expenseForEdit.expense.amount} PLN → ${editCategory} ${editAmount} PLN`
                );
            } else {
                notification(ERROR, 'Coś poszło nie tak, spróbuj ponownie');
            }
        }
    };

    return (
        <Wrapper>
            <Link to="/expenses" className="btn-back">
                <TfiBackLeft />
            </Link>
            <Logo />
            <form id="form" className="form-container" onSubmit={handleSubmit}>
                <h2>Edytuj wybrany wydatek</h2>
                <FormRowSelect
                    id="categorySelect"
                    options={categories.map((item) => {
                        return {
                            value: item.name,
                            label: item.name
                        };
                    })}
                    theme={theme}
                    value={{
                        value: editCategory,
                        label: editCategory
                    }}
                    placeholder="wyszukaj lub wybierz kategorię"
                    onChange={handleCategoryChange}
                />
                <FormRowInput
                    id="amountInput"
                    value={editAmount}
                    type="number"
                    placeholder="wydana kwota"
                    onChange={handleAmountChange}
                />
                <FormRowInput
                    id="commentInput"
                    value={editComment}
                    type="text"
                    placeholder="komentarz"
                    onChange={handleCommentChange}
                />
                <Button type="submit" version="hero" isDisabled={buttonDisabled}>
                    zapisz
                </Button>
                <img src={background} alt="background" className="background-image" />
            </form>
        </Wrapper>
    );
}

export default EditExpense;
