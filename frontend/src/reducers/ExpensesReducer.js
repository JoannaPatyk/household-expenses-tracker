import md5 from 'md5';
import { ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE, UPDATE_NAME_CATEGORY } from '../utils/actions';

const ExpenseReducer = (state, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    {
                        id: md5(action.payload.name + action.payload.amount + action.payload.comment),
                        name: action.payload.name,
                        amount: action.payload.amount,
                        comment: action.payload.comment
                    }
                ]
            };
        case UPDATE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                    expense.id === action.payload.id
                        ? {
                              id: action.payload.id,
                              name: action.payload.updateName,
                              amount: action.payload.updateAmount,
                              comment: action.payload.updateComment
                          }
                        : expense
                )
            };
        case UPDATE_NAME_CATEGORY:
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                    expense.name === action.payload.oldName
                        ? {
                              id: expense.id,
                              name: action.payload.updateName,
                              amount: expense.amount,
                              comment: expense.comment
                          }
                        : expense
                )
            };
        case DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            };
        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
};

export default ExpenseReducer;
