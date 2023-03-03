import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TfiBackLeft } from 'react-icons/tfi';
import { CiEdit } from 'react-icons/ci';
import { HiOutlineXMark } from 'react-icons/hi2';
import background from '../assets/images/background.png';
import Button from './Button';
import Logo from './Logo';
import Wrapper from '../assets/wrappers/EditCategory';
import FormRowInput from '../components/FormRowInput';
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
            <Link to="/add" className="btn-back">
                <TfiBackLeft />
            </Link>
            <Logo />
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
                <img src={background} alt="background" className="background-image" />
            </div>
            <div className="categories">
                {categories.map((category) => {
                    return (
                        <div className="category" key={category.id}>
                            <p>{category.name}</p>
                            <CiEdit className="edit-btn edit" onClick={() => handleEdit(category)} />
                            <HiOutlineXMark className="edit-btn delete" onClick={() => deleteCategory(category.id)} />
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    );
}

export default EditCategory;
