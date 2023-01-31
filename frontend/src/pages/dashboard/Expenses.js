import React from 'react';
import { useExpensesContext } from '../../context/ExpensesContext';
import { useCategoriesContext } from '../../context/CategoriesContext';
import Wrapper from '../../assets/wrappers/Expenses';
import Modal from 'react-modal';
import Button from '../../components/Button';
import EditExpense from '../../components/EditExpense';
import { CiEdit } from 'react-icons/ci';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

function Expenses() {
    const { expenses, saveExpenseForEdit, deleteExpense } = useExpensesContext();
    const { toggleModal, showEditModal } = useCategoriesContext();

    const handleEditButtonClick = (expense) => {
        toggleModal();
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
                                    <td>{expense.amount} zł</td>
                                    <td>{expense.comment}</td>
                                    <td className="btn-container">
                                        <Button
                                            version="hipster"
                                            id="btn"
                                            onClick={() => handleEditButtonClick(expense)}
                                        >
                                            <CiEdit className="btn-icone" />
                                        </Button>
                                        <Button version="hipster" id="btn" onClick={() => deleteExpense(expense.id)}>
                                            <IoIosCloseCircleOutline className="btn-icone" />
                                        </Button>
                                    </td>
                                    <Modal isOpen={showEditModal} ariaHideApp={false} style={modalStyles}>
                                        <EditExpense />
                                    </Modal>
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
