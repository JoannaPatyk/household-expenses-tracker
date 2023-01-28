import { ADD_EXPENSE, ADD_EXPENSES, UPDATE_EXPENSE, DELETE_EXPENSE, UPDATE_NAME_CATEGORY } from '../utils/actions';

const ExpenseReducer = (state, action) => {
    switch (action.type) {
        case ADD_EXPENSE: {
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    {
                        id: action.payload.id,
                        category: action.payload.category,
                        amount: action.payload.amount,
                        comment: action.payload.comment
                    }
                ]
            };
        }
        case ADD_EXPENSES: {
            const expenses = action.payload.map((item) => {
                return {
                    id: item._id,
                    category: item.category,
                    amount: item.amount,
                    comment: item.comment
                };
            });
            return {
                ...state,
                expenses: expenses
            };
        }
        case UPDATE_EXPENSE: {
            const id = action.payload.id;
            const updateCategory = action.payload.updateCategory;
            const updateAmount = action.payload.updateAmount;
            const updateComment = action.payload.updateComment;
            const updatedExpense = {
                id,
                category: updateCategory,
                amount: updateAmount,
                comment: updateComment
            };
            return {
                ...state,
                expenses: state.expenses.map((expense) => (expense.id === id ? updatedExpense : expense))
            };
        }
        case UPDATE_NAME_CATEGORY: {
            const oldName = action.payload.oldName;
            const updateCategoryName = action.payload.updateName;
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                    expense.name === oldName
                        ? {
                              id: expense.id,
                              category: updateCategoryName,
                              amount: expense.amount,
                              comment: expense.comment
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
