import styled from 'styled-components';

const Wrapper = styled.div`
    .edit-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 6rem 6rem 0 6rem;
    }

    h2 {
        font-size: 1.2rem;
        margin: 0;
    }

    form {
        text-align: center;
    }

    #form-input {
        width: 50vw;
    }

    #form-input::placeholder {
        font-size: 0.8rem;
    }

    #form-input:focus {
        width: 40vw;
    }

    .categories {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem 6rem 0 6rem;
    }

    .category {
        display: flex;
        align-items: center;
        position: relative;
        width: 80%;
        min-height: 50px;
        padding-left: 0.5rem;
        margin: 0.5rem;
        color: var(--secondary-900);
        font-size: 0.95rem;
        border-radius: var(--borderRadius);
        background-color: var(--primary-300);
    }

    .category p {
        max-width: 85%;
        padding: 0.5rem;
        letter-spacing: var(--letterSpacing);
    }

    .edit-btn {
        position: absolute;
        top: 30%;
        font-size: 1.4rem;
        color: var(--secondary-900);
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

        #form-input {
            width: 60vw;
        }

        #form-input:focus {
            width: 50vw;
        }
        #form-input::placeholder {
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
