import React from 'react';
import { useExpensesContext } from '../../context/ExpensesContext';
import { useCategoriesContext } from '../../context/CategoriesContext';
import Wrapper from '../../assets/wrappers/Expenses';
import Modal from 'react-modal';
import Button from '../../components/Button';
import EditExpense from '../../components/EditExpense';
import { CiEdit } from 'react-icons/ci';
import { TfiBackLeft } from 'react-icons/tfi';

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
                <div className="title">
                    <h4>LP.</h4>
                    <h4>kategoria</h4>
                    <h4>kwota</h4>
                    <h4>komentarz</h4>
                    <h4> </h4>
                </div>
                {expenses.map((expense, index) => {
                    return (
                        <div key={expense.id} className="expense-container">
                            <p>{index + 1}</p>
                            <p>{expense.name}</p>
                            <p>{expense.amount} zł</p>
                            <h5>{expense.comment}</h5>
                            <div className="btn-container">
                                <Button version="hipster" id="big-btn" onClick={() => handleEditButtonClick(expense)}>
                                    edytuj
                                </Button>
                                <Button version="hipster" id="big-btn" onClick={() => deleteExpense(expense.id)}>
                                    usuń
                                </Button>

                                <Button version="hipster" id="small-btn" onClick={() => handleEditButtonClick(expense)}>
                                    <CiEdit />
                                </Button>
                                <Button version="hipster" id="small-btn" onClick={() => deleteExpense(expense.id)}>
                                    <TfiBackLeft />
                                </Button>
                            </div>
                            <Modal isOpen={showEditModal} ariaHideApp={false} style={modalStyles}>
                                <EditExpense />
                            </Modal>
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    );
}

export default Expenses;
