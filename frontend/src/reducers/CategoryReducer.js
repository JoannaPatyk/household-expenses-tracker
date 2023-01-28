import { TOGGLE_SIDEBAR, TOGGLE_MODAL, ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../utils/actions';

const CategoryReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen
            };
        case TOGGLE_MODAL:
            return {
                ...state,
                showEditModal: !state.showEditModal
            };
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, { id: action.payload, name: action.payload }]
            };
        case UPDATE_CATEGORY:
            return {
                ...state,
                categories: state.categories.map((category) =>
                    category.id === action.payload.id
                        ? { id: action.payload.id, name: action.payload.updateCategoryName }
                        : category
                )
            };
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter((category) => category.id !== action.payload)
            };
        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
};

export default CategoryReducer;
