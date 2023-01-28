import {
    TOGGLE_SIDEBAR,
    TOGGLE_MODAL,
    ADD_CATEGORIES,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
} from '../utils/actions';

const CategoryReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR: {
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen
            };
        }
        case TOGGLE_MODAL: {
            return {
                ...state,
                showEditModal: !state.showEditModal
            };
        }
        case ADD_CATEGORIES: {
            const categories = action.payload.map((item) => {
                return { id: item._id, name: item.name };
            });
            return {
                ...state,
                categories: categories
            };
        }
        case ADD_CATEGORY: {
            return {
                ...state,
                categories: [...state.categories, { name: action.payload }]
            };
        }
        case UPDATE_CATEGORY: {
            const id = action.payload.id;
            const updateCategoryName = action.payload.updateCategoryName;
            const updatedCategory = { id, name: updateCategoryName };
            return {
                ...state,
                categories: state.categories.map((category) => (category.id === id ? updatedCategory : category))
            };
        }
        case DELETE_CATEGORY: {
            return {
                ...state,
                categories: state.categories.filter((category) => category.id !== action.payload)
            };
        }
        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
};

export default CategoryReducer;
