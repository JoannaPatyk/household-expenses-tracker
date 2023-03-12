import React, { createContext, useEffect, useContext, useReducer, useState, useCallback } from 'react';
import { ADD_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../utils/Actions';
import PropTypes from 'prop-types';
import axios from 'axios';
import apiConfig from '../apiConfig';
import handleError from '../utils/ErrorHandling';
import { useUserContext } from './UserContext';
import reducer from '../reducers/CategoryReducer';

const initialState = {
    categories: []
};

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [categoryName, setCategoryName] = useState('');
    const { isLogged } = useUserContext();
    const [currentlyEditedCategory, setCurrentlyEditedCategory] = useState({
        category: {},
        edit: false
    });

    const fetchCategories = useCallback(async () => {
        try {
            const response = await axios.get(`${apiConfig.api}/categories`);
            const data = response.data;
            addAllCategories(data);
        } catch (error) {
            handleError(error);
        }
    }, []);

    useEffect(() => {
        if (isLogged) {
            fetchCategories();
        }
    }, [isLogged, fetchCategories]);

    const addAllCategories = (categories) => {
        dispatch({ type: ADD_CATEGORIES, payload: categories });
    };

    const addCategory = async (name) => {
        try {
            await axios.post(`${apiConfig.api}/categories`, { name });
            dispatch({ type: ADD_CATEGORY, payload: name });
            fetchCategories();

            return true;
        } catch (error) {
            return false;
        }
    };

    const updateCategory = async (id, updateCategoryName) => {
        try {
            await axios.patch(`${apiConfig.api}/categories/${id}`, { name: updateCategoryName });

            dispatch({ type: UPDATE_CATEGORY, payload: { id, updateCategoryName } });
            setCurrentlyEditedCategory({
                category: {},
                edit: false
            });

            return true;
        } catch (error) {
            return false;
        }
    };

    const deleteCategory = async (id) => {
        try {
            await axios.delete(`${apiConfig.api}/categories/${id}`);
            dispatch({ type: DELETE_CATEGORY, payload: id });

            return true;
        } catch (error) {
            return false;
        }
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
