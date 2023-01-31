import { ADD_BUDGET, UPDATE_BUDGET } from '../utils/actions';

const BudgetReducer = (state, action) => {
    switch (action.type) {
        case ADD_BUDGET: {
            return {
                ...state,
                budget: action.payload.map((item) => {
                    return { id: item._id, categoryName: item.categoryName, amount: item.amount };
                })
            };
        }
        case UPDATE_BUDGET: {
            return {
                ...state,
                budget: state.budget.map((budgetEntry) =>
                    budgetEntry.id === action.payload.id
                        ? {
                              id: action.payload.id,
                              categoryName: budgetEntry.categoryName,
                              amount: action.payload.updateBudgetEntryAmount
                          }
                        : budgetEntry
                )
            };
        }
        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
};

export default BudgetReducer;
