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
    const { categories, toggleModal, showEditModal } = useCategoriesContext();
    const { amount, comment, setName, setAmount, setComment, addExpense } = useExpensesContext();

    const handleAmountChange = (event) => {
        const newAmount = event.target.value;

        if (newAmount === '' || newAmount < 0) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }

        setAmount(newAmount);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedCategory = document.getElementById('select').value;

        addExpense(selectedCategory, amount, comment);
        setName('');
    };

    return (
        <Wrapper>
            <form id="form" className="form-container" onSubmit={handleSubmit}>
                <div className="categories-container">
                    <h2>Dodaj nowy wydatek</h2>
                    <label>
                        Wybierz kategorię:
                        <select id="select" className="form-select">
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
                        Kwota:
                        <input
                            value={amount}
                            type="number"
                            className="form-input"
                            placeholder="wydana kwota"
                            onChange={handleAmountChange}
                        />
                    </label>
                    <label>
                        Komentarz:
                        <input
                            value={comment}
                            type="text"
                            className="form-input"
                            placeholder="komentarz"
                            onChange={(event) => setComment(event.target.value)}
                        />
                    </label>
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