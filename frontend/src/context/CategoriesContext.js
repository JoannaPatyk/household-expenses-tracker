import React, { createContext, useContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { TOGGLE_SIDEBAR, TOGGLE_MODAL, ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../utils/actions';
import reducer from '../reducers/CategoryReducer';

const initialState = {
    isSidebarOpen: false,
    categories: [
        { id: 1, name: 'zakupy' },
        { id: 2, name: 'mieszkanie' },
        { id: 3, name: 'higiena' },
        { id: 4, name: 'transport' },
        { id: 5, name: 'rozrywka' },
        { id: 6, name: 'zdrowie' }
    ],
    showEditModal: false
};

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [categoryName, setCategoryName] = useState('');

    const [currentlyEditedCategory, setCurrentlyEditedCategory] = useState({
        category: {},
        edit: false
    });

    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR });
    };

    const toggleModal = () => {
        dispatch({ type: TOGGLE_MODAL });
    };

    const addCategory = (name) => {
        dispatch({ type: ADD_CATEGORY, payload: name });
    };

    const updateCategory = (id, updateCategoryName) => {
        dispatch({ type: UPDATE_CATEGORY, payload: { id, updateCategoryName } });
        setCurrentlyEditedCategory({
            category: {},
            edit: false
        });
    };

    const deleteCategory = (id) => {
        dispatch({ type: DELETE_CATEGORY, payload: id });
    };

    const saveCategoryForEdit = (category) => {
        setCurrentlyEditedCategory({
            category,
            edit: true
        });
    };

    return (
        <CategoriesContext.Provider
            value={{
                ...state,
                categoryName,
                currentlyEditedCategory,
                setCategoryName,
                toggleSidebar,
                toggleModal,
                addCategory,
                saveCategoryForEdit,
                updateCategory,
                deleteCategory
            }}
        >
            {children}
        </CategoriesContext.Provider>
    );
};

CategoriesProvider.propTypes = {
    children: PropTypes.any.isRequired
};

export const useCategoriesContext = () => {
    return useContext(CategoriesContext);
};
