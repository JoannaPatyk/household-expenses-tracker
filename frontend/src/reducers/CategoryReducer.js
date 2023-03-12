import { ADD_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../utils/Actions';

const CategoryReducer = (state, action) => {
    switch (action.type) {
        case ADD_CATEGORIES: {
            return {
                ...state,
                categories: action.payload.map((item) => {
                    return { id: item._id, name: item.name };
                })
            };
        }
        case ADD_CATEGORY: {
            return {
                ...state,
                categories: [...state.categories, { id: '', name: action.payload }]
            };
        }
        case UPDATE_CATEGORY: {
            return {
                ...state,
                categories: state.categories.map((category) =>
                    category.id === action.payload.id
                        ? { ...category, name: action.payload.updateCategoryName }
                        : category
                )
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
