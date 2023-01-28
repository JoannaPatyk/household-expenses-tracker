import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCategoriesContext } from '../context/CategoriesContext';
import Modal from 'react-modal';
import Wrapper from '../assets/wrappers/ExpensesForm';
import Button from './Button';
import EditCategory from './EditCategory';

const customStyles = {
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
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [comment, setComment] = useState('');
    const { categories, toggleModal, showEditModal } = useCategoriesContext();
    const data = new Date();
    console.log(`${+data.getDate()}-${+data.getDay()}-${+data.getFullYear()}`);

    const handleSubmit = (event) => {
        event.preventDefault();
        setName('');
    };

    return (
        <Wrapper>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="categories-container">
                    <h2>Dodaj wydatek</h2>
                    <label>
                        Wybierz kategorię:
                        <select className="form-select">
                            {categories.map((category) => {
                                return (
                                    <option key={category.id} value={category.name}>
                                        {category.name}
                                    </option>
                                );
                            })}
                        </select>
                    </label>
                    <Button version="hipster" onClick={() => toggleModal()}>
                        edytuj kategorie
                    </Button>
                    <Modal isOpen={showEditModal} ariaHideApp={false} style={customStyles}>
                        <EditCategory name={name} setName={setName} />
                    </Modal>
                </div>
                <div className="expense-container">
                    <label>
                        Kwota:
                        <input
                            value={amount}
                            type="number"
                            className="form-input"
                            placeholder="wydana kwota"
                            onChange={(event) => setAmount(event.target.value)}
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
                <Button version="hero">
                    <Link to={{ pathname: '/expenses' }} className="link">
                        dodaj
                    </Link>
                </Button>
            </form>
        </Wrapper>
    );
}

export default ExpensesForm;
