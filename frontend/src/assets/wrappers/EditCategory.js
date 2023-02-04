import styled from 'styled-components';

const Wrapper = styled.div`
    .edit-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-top: 6rem;
    }

    h2 {
        font-size: 1.2rem;
        margin: 0;
    }

    .form-input {
        width: 80vw;
    }

    .form-input::placeholder {
        font-size: 0.8rem;
    }

    .form-input:focus {
        width: 60vw;
    }

    .categories {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
    }

    .category {
        position: relative;
        font-size: 0.95rem;
        border-radius: var(--borderRadius);
        color: var(--secondary-900);
        background-color: var(--secondary-400);
        width: 80%;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem;
    }

    .btn {
        width: 80%;
        font-size: 1rem;
    }

    .edit-btn {
        position: absolute;
        top: 30%;
        font-size: 1.4rem;
        color: var(--secondary-800);
        transition: var(--transition);
        cursor: pointer;
    }

    .edit-btn:hover {
        color: var(--primary-800);
    }

    .edit {
        right: 10%;
    }

    .delete {
        right: 2%;
    }

    @media (min-width: 820px) {
        h2 {
            font-size: 1.8rem;
        }

        .form-input {
            width: 40rem;
        }

        .form-input::placeholder {
            font-size: 1rem;
        }

        .categories {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .category {
            place-self: center;
            width: 70%;
            margin: 1rem 0;
            font-size: 1.1rem;
        }

        .btn {
            width: 35%;
            font-size: 1.2rem;
        }
    }
    @media (min-width: 1420px) {
        .categories {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;
export default Wrapper;
