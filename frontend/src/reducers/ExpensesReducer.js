import { ADD_EXPENSE, ADD_EXPENSES, UPDATE_EXPENSE, DELETE_EXPENSE, UPDATE_NAME_CATEGORY } from '../utils/Actions';

const ExpenseReducer = (state, action) => {
    switch (action.type) {
        case ADD_EXPENSE: {
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    {
                        category: action.payload.category,
                        amount: action.payload.amount,
                        comment: action.payload.comment
                    }
                ]
            };
        }
        case ADD_EXPENSES: {
            return {
                ...state,
                expenses: action.payload.map((item) => {
                    return {
                        id: item._id,
                        name: item.name,
                        date: item.date,
                        category: item.category,
                        amount: item.amount,
                        comment: item.comment
                    };
                })
            };
        }
        case UPDATE_EXPENSE: {
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                    expense.id === action.payload.id
                        ? {
                              ...expense,
                              category: action.payload.updateCategory,
                              amount: action.payload.updateAmount,
                              comment: action.payload.updateComment
                          }
                        : expense
                )
            };
        }
        case UPDATE_NAME_CATEGORY: {
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                    expense.name === action.payload.oldName
                        ? {
                              ...expense,
                              category: action.payload.updateName
                          }
                        : expense
                )
            };
        }
        case DELETE_EXPENSE: {
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            };
        }
        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
};

export default ExpenseReducer;
