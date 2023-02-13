import React from 'react';
import { Link } from 'react-router-dom';
import { useExpensesContext } from '../../context/ExpensesContext';
import Wrapper from '../../assets/wrappers/Expenses';
import Button from '../../components/Button';
import { CiEdit } from 'react-icons/ci';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import LoadingIndicator from '../../components/LoadingIndicator';

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
                                <tr key={index} className="expense-container">
                                    <td>{index + 1}.</td>
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
                <LoadingIndicator />
            </div>
        </Wrapper>
    );
}

export default Expenses;
