import React, { useState, useEffect } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { CiEdit } from 'react-icons/ci';
import { TfiBackLeft } from 'react-icons/tfi';
import Button from './Button';
import Wrapper from '../assets/wrappers/EditCategory';
import { useCategoriesContext } from '../context/CategoriesContext';
import { useExpensesContext } from '../context/ExpensesContext';

function EditCategory() {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [oldName, setOldName] = useState('');
    const {
        categories,
        addCategory,
        deleteCategory,
        updateCategory,
        currentlyEditedCategory,
        toggleModal,
        saveCategoryForEdit,
        categoryName,
        setCategoryName
    } = useCategoriesContext();
    const { updateNameCategory } = useExpensesContext();

    useEffect(() => {
        if (currentlyEditedCategory.edit === true) {
            setButtonDisabled(false);
            setCategoryName(currentlyEditedCategory.category.name);
        }
        // eslint-disable-next-line
    }, [currentlyEditedCategory]);

    const handleNameChange = (event) => {
        if (event.target.value === '' || categories.find((category) => category.name === event.target.value)) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }

        setCategoryName(event.target.value);
    };

    const handleEdit = (category) => {
        saveCategoryForEdit(category);
        setOldName(category.name);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (currentlyEditedCategory.edit === true) {
            updateCategory(currentlyEditedCategory.category.id, categoryName);
            updateNameCategory(oldName, categoryName);
        } else {
            addCategory(categoryName);
        }

        setButtonDisabled(true);
        setCategoryName('');
    };

    return (
        <Wrapper>
            <button onClick={() => toggleModal()}>
                <TfiBackLeft className="back-btn edit" />
            </button>
            <div className="container">
                <h2>Dodaj lub edytuj kategorie</h2>
                <div className="categories-container">
                    <div className="categories">
                        {categories.map((category) => {
                            return (
                                <div className="category" key={category.id}>
                                    {category.name}
                                    <CiEdit className="edit-btn edit" onClick={() => handleEdit(category)} />
                                    <IoIosCloseCircleOutline
                                        className="edit-btn delete"
                                        onClick={() => deleteCategory(category.id)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <form className="edit-container" onSubmit={handleSubmit}>
                        <input
                            value={categoryName}
                            type="text"
                            className="form-input"
                            placeholder="Dodaj brakującą kategorie lub edytuj istniejącą..."
                            onChange={handleNameChange}
                        />
                        <Button type="submit" version="hero" isDisabled={buttonDisabled}>
                            zapisz
                        </Button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

export default EditCategory;
