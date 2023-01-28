import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCategoriesContext } from '../context/CategoriesContext';
import { TiEdit, TiDelete } from 'react-icons/ti';
import Wrapper from '../assets/wrappers/EditCategory';
import Button from './Button';

function EditCategory({ name, setName }) {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const {
        categories,
        addCategory,
        deleteCategory,
        updateCategory,
        categoriesEdit,
        toggleModal,
        saveCategoryForEdit
    } = useCategoriesContext();

    useEffect(() => {
        if (categoriesEdit.edit === true) {
            setButtonDisabled(false);
            setName(categoriesEdit.category.name);
        }
        // eslint-disable-next-line
    }, [categoriesEdit]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (categoriesEdit.edit === true) {
            updateCategory(categoriesEdit.category.id, name);
        } else {
            addCategory(name);
        }

        setButtonDisabled(true);
        setName('');
    };

    const handleNameChange = (event) => {
        const value = event.target.value;

        if (value === '' || categories.find((item) => item.name === value)) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }

        setName(value);
    };

    return (
        <Wrapper>
            <div className="container">
                <h2>Dodaj lub edytuj kategorie</h2>
                <div className="categories-container">
                    <form className="edit-container" onSubmit={handleSubmit}>
                        <input
                            value={name}
                            type="text"
                            className="form-input"
                            placeholder="Dodaj brakującą kategorie lub edytuj istniejącą wybierając ją z listy..."
                            onChange={handleNameChange}
                        />
                        <Button type="submit" version="hero" isDisabled={buttonDisabled}>
                            {' '}
                            zapisz
                        </Button>
                    </form>
                    <div className="categories">
                        {categories.map((category) => {
                            return (
                                <div className="category" key={category.id}>
                                    {category.name}
                                    <TiEdit
                                        className="edit-button edit"
                                        onClick={() => saveCategoryForEdit(category)}
                                    />
                                    <TiDelete
                                        className="edit-button delete"
                                        onClick={() => deleteCategory(category.id)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Button version="hero" onClick={() => toggleModal()}>
                    wyjdź
                </Button>
                <Button version="hipster" onClick={() => toggleModal()}>
                    anuluj
                </Button>
            </div>
        </Wrapper>
    );
}

EditCategory.defaultProps = {
    name: ''
};

EditCategory.propTypes = {
    name: PropTypes.string,
    setName: PropTypes.func
};

export default EditCategory;
