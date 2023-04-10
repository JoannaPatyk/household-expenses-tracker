import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/IndexComponents';
import notification, { INFO, ERROR } from '../../utils/Notification';
import Wrapper from '../../assets/wrappers/Expenses';
import { CiEdit } from 'react-icons/ci';
import { HiOutlineXMark } from 'react-icons/hi2';
import { useExpensesContext } from '../../context/ExpensesContext';

function Expenses() {
    const { expenses, saveExpenseForEdit, deleteExpense } = useExpensesContext();

    const handleEditButtonClick = (expense) => {
        saveExpenseForEdit(expense);
    };

    const handleDeleteExpenseClick = async (expense) => {
        const result = await deleteExpense(expense.id);

        if (result) {
            notification(INFO, `Usunięto wydatek: ${expense.category} - ${expense.amount} PLN`);
        } else {
            notification(ERROR, 'Coś poszło nie tak, spróbuj ponownie');
        }
    };

    return (
        <Wrapper>
            <table>
                <thead>
                    <tr className="expenses-title">
                        <th>LP.</th>
                        <th>kto</th>
                        <th>data</th>
                        <th>kategoria</th>
                        <th>kwota</th>
                        <th>komentarz</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => {
                        const date = new Date(Number(expense.date));
                        const dateString = date.toLocaleString('sv-SE');
                        return (
                            <tr key={expense.id} className="expense-container">
                                <td>{index + 1}.</td>
                                <td>{expense.name}</td>
                                <td>{dateString}</td>
                                <td>{expense.category}</td>
                                <td>{expense.amount} zł</td>
                                <td>{expense.comment}</td>
                                <td className="btn-container">
                                    <Link
                                        to="/edit_expense"
                                        id="btn"
                                        className="btn-hipster"
                                        onClick={() => handleEditButtonClick(expense)}
                                    >
                                        <CiEdit className="btn-icon" />
                                    </Link>
                                    <Button
                                        version="hipster"
                                        id="btn"
                                        onClick={() => handleDeleteExpenseClick(expense)}
                                    >
                                        <HiOutlineXMark className="btn-icon" />
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Wrapper>
    );
}

export default Expenses;
