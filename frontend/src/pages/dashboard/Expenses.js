import React from 'react';
import { Link } from 'react-router-dom';
import { useExpensesContext } from '../../context/ExpensesContext';
import Wrapper from '../../assets/wrappers/Expenses';
import Button from '../../components/Button';
import { CiEdit } from 'react-icons/ci';
import { IoIosCloseCircleOutline } from 'react-icons/io';

function Expenses() {
    const { expenses, saveExpenseForEdit, deleteExpense } = useExpensesContext();

    const handleEditButtonClick = (expense) => {
        saveExpenseForEdit(expense);
    };

    return (
        <Wrapper>
            <div className="container">
                <table>
                    <thead>
                        <tr className="title">
                            <th>LP.</th>
                            <th>kategoria</th>
                            <th>kwota</th>
                            <th>komentarz</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense, index) => {
                            return (
                                <tr key={expense.id} className="expense-container">
                                    <td>{index + 1}.</td>
                                    <td>{expense.category}</td>
                                    <td>{expense.amount.toFixed(2)} zł</td>
                                    <td>{expense.comment}</td>
                                    <td className="btn-container">
                                        <Link
                                            to="edit-expense"
                                            id="btn"
                                            className="btn-hipster"
                                            onClick={() => handleEditButtonClick(expense)}
                                        >
                                            <CiEdit className="btn-icone" />
                                        </Link>

                                        <Button version="hipster" id="btn" onClick={() => deleteExpense(expense.id)}>
                                            <IoIosCloseCircleOutline className="btn-icone" />
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
}

export default Expenses;
