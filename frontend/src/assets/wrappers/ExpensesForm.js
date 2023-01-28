import styled from 'styled-components';

const Wrapper = styled.div`
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 3.5rem;
    }

    .categories-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .expense-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    input,
    select {
        width: 12rem;
    }

    .link {
        margin-top: 1rem;
        padding: 1rem;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.2rem;
        letter-spacing: var(--letterSpacing);
        color: var(--primary-700);
        transition: var(--transition);
    }

    .link:hover {
        transform: translateX(5px);
        box-shadow: var(--shadow-2);
    }

    .btn {
        font-size: 0.9rem;
    }

    .edit-btn {
        position: absolute;
        top: 2%;
        font-size: 1.4rem;
        color: var(--grey-600);
        transition: var(--transition);
        cursor: pointer;
    }

    .edit-btn:hover {
        color: var(--primary-700);
    }

    .edit {
        left: 4%;
    }

    .delete {
        right: 2%;
    }

    .editCategoryBtn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }

    @media (min-width: 992px) {
        h2 {
            font-size: 1.8rem;
        }

        input,
        select {
            width: 24rem;
        }

        .btn {
            width: 24rem;
            font-size: 1.2rem;
        }

        form {
            margin-bottom: 2rem;
        }
    }
`;

export default Wrapper;
