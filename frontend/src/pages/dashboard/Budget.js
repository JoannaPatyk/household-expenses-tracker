import React, { useRef } from 'react';
import { FormRowInput } from '../../components';
import { toast } from 'react-toastify';
import notification, { ERROR } from '../../utils/Notification';
import Wrapper from '../../assets/wrappers/Budget';
import { useBudgetContext } from '../../context/BudgetContext';

function Budget() {
    const { budget, updateBudget, summedByCategory } = useBudgetContext();

    const handleAmount = (categoryName) => {
        const summedExpense = summedByCategory.find((item) => item.category === categoryName);
        return summedExpense === undefined ? 0 : summedExpense.amount;
    };

    const toastId = useRef(null);

    const notify = (message) => {
        toastId.current = toast.success(message, {
            position: toast.POSITION.BOTTOM_LEFT,
            className: 'toast-message'
        });
    };

    const update = (message) => {
        toast.update(toastId.current, {
            render: message,
            position: toast.POSITION.BOTTOM_LEFT,
            className: 'toast-message'
        });
    };

    const onChangeAmount = async (event, budgetEntry) => {
        const value = event.target.value;
        const result = await updateBudget(budgetEntry.id, value);

        if (result) {
            if (toast.isActive(toastId.current)) {
                update(
                    `Zaktualizowano planowane wydatki dla kategorii ${budgetEntry.categoryName} - ${budgetEntry.amount} PLN → ${value} PLN`
                );
            } else {
                notify(
                    `Zaktualizowano planowane wydatki dla kategorii ${budgetEntry.categoryName} - ${budgetEntry.amount} PLN → ${value} PLN`
                );
            }
        } else {
            notification(ERROR, 'Coś poszło nie tak, spróbuj ponownie');
        }
    };

    return (
        <Wrapper>
            <div className="container">
                <table>
                    <thead>
                        <tr className="title">
                            <th>dostępne kategorie</th>
                            <th>planowane wydatki</th>
                            <th>suma wydatków</th>
                        </tr>
                    </thead>
                    <tbody>
                        {budget.map(({ id, categoryName, amount }) => {
                            return (
                                <tr key={id} className="budget-container">
                                    <td>{categoryName}</td>
                                    <td>
                                        <FormRowInput
                                            id="input"
                                            type="text"
                                            value={amount || ''}
                                            placeholder="0"
                                            onChange={(event) => onChangeAmount(event, { id, categoryName, amount })}
                                        />
                                        PLN
                                    </td>
                                    <td>{handleAmount(categoryName)} PLN</td>
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
