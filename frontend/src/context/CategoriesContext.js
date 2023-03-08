import React, { createContext, useEffect, useContext, useReducer, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { TOGGLE_SIDEBAR, ADD_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../utils/Actions';
import reducer from '../reducers/CategoryReducer';
import apiConfig from '../apiConfig';
import { useUserContext } from './UserContext';
import { trackPromise } from 'react-promise-tracker';

const initialState = {
    isSidebarOpen: false,
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
            console.error('error: ', error.response);
        }
    }, []);

    useEffect(() => {
        if (isLogged) {
            trackPromise(fetchCategories());
        }
    }, [isLogged, fetchCategories]);

    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR });
    };

    const addAllCategories = (categories) => {
        dispatch({ type: ADD_CATEGORIES, payload: categories });
    };

    const addCategory = async (name) => {
        try {
            await axios.post(`${apiConfig.api}/categories`, { name });
            dispatch({ type: ADD_CATEGORY, payload: name });
            trackPromise(fetchCategories());

            return true;
        } catch (error) {
            console.error('error: ', error.response);
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
            console.error('error: ', error.response);
            return false;
        }
    };

    const deleteCategory = async (id) => {
        try {
            await axios.delete(`${apiConfig.api}/categories/${id}`);
            dispatch({ type: DELETE_CATEGORY, payload: id });

            return true;
        } catch (error) {
            console.error('error: ', error.response);
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
