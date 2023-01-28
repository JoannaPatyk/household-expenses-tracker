import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from './Button';
import EditCategory from './EditCategory';
import Wrapper from '../assets/wrappers/ExpensesForm';
import { useExpensesContext } from '../context/ExpensesContext';
import { useCategoriesContext } from '../context/CategoriesContext';

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

function ExpensesForm() {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [newAmount, setNewAmount] = useState('');
    const [newComment, setNewComment] = useState('');
    const { categories, toggleModal, showEditModal } = useCategoriesContext();
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
                    <label htmlFor="select">Wybierz kategorię:</label>
                    <select id="select" className="form-select">
                        {categories.map((item, index) => {
                            return (
                                <option key={index} value={item.name}>
                                    {item.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="expense-container">
                    <label htmlFor="amountInput">Kwota:</label>
                    <input
                        id="amountInput"
                        value={newAmount}
                        type="number"
                        className="form-input"
                        placeholder="wydana kwota"
                        onChange={handleAmountChange}
                    />
                    <label htmlFor="commentInput">Komentarz:</label>
                    <input
                        id="commentInput"
                        value={newComment}
                        type="text"
                        className="form-input"
                        placeholder="komentarz"
                        onChange={(event) => setNewComment(event.target.value)}
                    />
                </div>
                <Button type="submit" version="hero" isDisabled={buttonDisabled}>
                    dodaj
                </Button>
            </form>
            <div className="editCategoryBtn-container">
                <Button version="hipster" onClick={() => toggleModal()}>
                    edytuj dostępne kategorie
                </Button>
                <Modal isOpen={showEditModal} ariaHideApp={false} style={modalStyles}>
                    <EditCategory />
                </Modal>
            </div>
        </Wrapper>
    );
}

export default ExpensesForm;
