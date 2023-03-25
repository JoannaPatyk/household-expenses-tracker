import React, { useRef, useEffect, useState } from 'react';
import { FormRowInput, Button, ProgressBar } from '../../components/IndexComponents';
import { toast } from 'react-toastify';
import notification, { ERROR } from '../../utils/Notification';
import Wrapper from '../../assets/wrappers/Budget';
import { useBudgetContext } from '../../context/BudgetContext';

function Budget() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { budget, updateBudget, summedByCategory, deleteBudget } = useBudgetContext();

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSummedExpensesByCategory = (categoryName) => {
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
                update(`Zaktualizowano planowane wydatki dla kategorii ${budgetEntry.categoryName} → ${value} PLN`);
            } else {
                notify(`Zaktualizowano planowane wydatki dla kategorii ${budgetEntry.categoryName} → ${value} PLN`);
            }
        } else {
            notification(ERROR, 'Coś poszło nie tak, spróbuj ponownie');
        }
    };

    return (
        <Wrapper>
            <div className="table-container">
                <table>
                    <thead>
                        <tr className="title">
                            <th>kategorie</th>
                            <th>planowane wydatki</th>
                            <th> suma wydatków</th>
                            {windowWidth > 1425 ? (
                                <th>
                                    procent planowanych <br /> wydatków{' '}
                                </th>
                            ) : (
                                <th>%</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {budget.map(({ id, categoryName, amount }) => {
                            const summedExpense = handleSummedExpensesByCategory(categoryName);
                            let percentage;
                            amount = Number(amount);

                            if (amount === 0) {
                                percentage = 0;
                            } else {
                                percentage = Math.round((summedExpense * 100) / amount);
                            }

                            return (
                                <tr key={id} className="budget-container">
                                    <td>{categoryName}</td>
                                    <td>
                                        <FormRowInput
                                            id="input"
                                            type="number"
                                            value={amount || ''}
                                            placeholder="0"
                                            onChange={(event) => onChangeAmount(event, { id, categoryName, amount })}
                                        />
                                        PLN
                                    </td>
                                    <td>{summedExpense} PLN</td>
                                    <td className="td-progress-bar">
                                        <div className="progress-container">
                                            <ProgressBar percentage={percentage} />
                                            <p>{percentage}%</p>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {budget.length > 0 ? (
                    <Button version="hero" id="btn-clean" onClick={() => deleteBudget()}>
                        wyczyść budżet
                    </Button>
                ) : null}
            </div>
        </Wrapper>
    );
}

export default Budget;
