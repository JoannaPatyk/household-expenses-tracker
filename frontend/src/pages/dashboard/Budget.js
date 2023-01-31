import React from 'react';
import Wrapper from '../../assets/wrappers/Budget';
import FormRowInput from '../../components/FormRowInput';
import { useBudgetContext } from '../../context/BudgetContext';
import { useExpensesContext } from '../../context/ExpensesContext';

function Budget() {
    const { budget, updateBudget, sumBudgetByCategory } = useBudgetContext();
    const { expenses } = useExpensesContext();

    // TODO: zoptymalizować
    const handleAmount = (categoryName) => {
        const summedByCategory = sumBudgetByCategory(expenses, 'category', 'amount');
        const summedExpense = summedByCategory.find((item) => item.category === categoryName);
        return summedExpense === undefined ? 0 : summedExpense.amount;
    };

    const onChangeAmount = (event, id) => {
        const { value } = event.target;
        updateBudget(id, value);
    };

    return (
        <Wrapper>
            <div className="container">
                <table>
                    <thead>
                        <tr className="title">
                            <th>kategoria</th>
                            <th>planowana kwota</th>
                            <th>aktualna kwota</th>
                        </tr>
                    </thead>
                    <tbody>
                        {budget.map(({ id, categoryName, amount }) => {
                            return (
                                <tr key={id} className="budget-container">
                                    <td>{categoryName}</td>
                                    <td>
                                        <FormRowInput
                                            type="text"
                                            value={amount || ''}
                                            placeholder="0"
                                            onChange={(event) => onChangeAmount(event, id)}
                                        />
                                        ZŁ
                                    </td>
                                    <td>{handleAmount(categoryName)} ZŁ</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
}

export default Budget;
