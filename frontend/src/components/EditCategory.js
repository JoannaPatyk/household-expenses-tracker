import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CiEdit } from 'react-icons/ci';
import { HiOutlineXMark } from 'react-icons/hi2';
import Button from './Button';
import Wrapper from '../assets/wrappers/EditCategory';
import FormRowInput from '../components/FormRowInput';
import { useCategoriesContext } from '../context/CategoriesContext';
import { useExpensesContext } from '../context/ExpensesContext';
import notification, { SUCCESS, INFO, ERROR } from '../utils/Notification';

function EditCategory() {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [oldName, setOldName] = useState('');
    const {
        categories,
        addCategory,
        deleteCategory,
        updateCategory,
        currentlyEditedCategory,
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
    }, [currentlyEditedCategory, setCategoryName]);

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
        setCategoryName('');
    };

    const handleDelete = async (category) => {
        const result = await deleteCategory(category.id);
        if (result) {
            notification(INFO, `Usunięto kategorię: ${category.name}`);
        } else {
            notification(ERROR, 'Coś poszło nie tak, spróbuj ponownie');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (currentlyEditedCategory.edit === true) {
            const result = await updateCategory(currentlyEditedCategory.category.id, categoryName);
            if (result) {
                updateNameCategory(oldName, categoryName);
                notification(
                    SUCCESS,
                    `Edytowano kategorię: ${currentlyEditedCategory.category.name} → ${categoryName}`
                );
            } else {
                notification(ERROR, 'Coś poszło nie tak, spróbuj ponownie');
            }
        } else {
            const result = await addCategory(categoryName);
            if (result) {
                notification(SUCCESS, `Dodano kategorię: ${categoryName}`);
            } else {
                notification(ERROR, 'Coś poszło nie tak, spróbuj ponownie');
            }
        }

        setButtonDisabled(true);
        setCategoryName('');
    };

    return (
        <Wrapper>
            <div className="edit-container">
                <h2>Dodaj lub edytuj kategorie</h2>
                <form onSubmit={handleSubmit}>
                    <FormRowInput
                        value={categoryName}
                        type="text"
                        id="form-input"
                        className="form-input"
                        placeholder="kategoria"
                        onChange={handleNameChange}
                    />
                    <Button type="submit" version="hero" isDisabled={buttonDisabled}>
                        zapisz
                    </Button>
                </form>
            </div>
            <div className="categories-container">
                <h2>Dostępne kategorie</h2>
                <div className="categories">
                    {categories.map((category) => {
                        return (
                            <div className="category" key={category.id}>
                                <p>{category.name}</p>
                                <CiEdit className="edit-btn edit" onClick={() => handleEdit(category)} />
                                <HiOutlineXMark className="edit-btn delete" onClick={() => handleDelete(category)} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    );
}

EditCategory.propTypes = {
    closeModal: PropTypes.func
};

export default EditCategory;
