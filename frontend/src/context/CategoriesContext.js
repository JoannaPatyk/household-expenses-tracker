import React, { createContext, useEffect, useContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { TOGGLE_SIDEBAR, ADD_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../utils/actions';
import reducer from '../reducers/CategoryReducer';
import apiConfig from '../apiConfig';

const initialState = {
    isSidebarOpen: false,
    categories: []
};

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [categoryName, setCategoryName] = useState('');
    const [currentlyEditedCategory, setCurrentlyEditedCategory] = useState({
        category: {},
        edit: false
    });

    const fetchCategories = async () => {
        const response = await fetch(`${apiConfig.api}/categories`);
        const data = await response.json();
        addAllCategories(data);
    };

    useEffect(() => {
        fetchCategories();
        // eslint-disable-next-line
    }, []);

    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR });
    };

    const addAllCategories = (categories) => {
        dispatch({ type: ADD_CATEGORIES, payload: categories });
    };

    const addCategory = async (name) => {
        await fetch(`${apiConfig.api}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        });

        dispatch({ type: ADD_CATEGORY, payload: name });
    };

    const updateCategory = async (id, updateCategoryName) => {
        await fetch(`${apiConfig.api}/categories/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: updateCategoryName })
        });

        dispatch({ type: UPDATE_CATEGORY, payload: { id, updateCategoryName } });
        setCurrentlyEditedCategory({
            category: {},
            edit: false
        });
    };

    const deleteCategory = async (id) => {
        await fetch(`${apiConfig.api}/categories/${id}`, {
            method: 'DELETE'
        });

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
