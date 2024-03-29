import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 6rem;
    min-height: 100vh;

    .edit-container,
    .categories,
    #form-input,
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .categories-container h2 {
        padding: 1rem 0;
        text-align: center;
    }

    h2 {
        font-size: 1.3rem;
        margin: 0;
    }

    #form-input {
        width: 16rem;
        margin: 1.5rem 0.8rem;
    }

    #form-input::placeholder {
        font-size: 1rem;
    }

    #form-input:focus {
        width: 220px;
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
        border-radius: 20px;
        background-color: var(--primary-300);
    }

    .category p {
        max-width: 85%;
        padding: 0.5rem;
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

    .btn {
        width: 16rem;
        height: 40px;
        margin: 1.2rem;
    }

    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        height: 40%;
        opacity: 0.3;
    }

    @media (min-width: 820px) {
        h2 {
            font-size: 1.8rem;
        }

        #form-input {
            width: 25rem;
            margin: 1.5rem 0.8rem;
        }

        #form-input:focus {
            width: 24rem;
        }

        .categories {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .category {
            place-self: center;
            width: 70%;
            margin: 1rem 0;
            font-size: 1rem;
        }

        .btn {
            width: 25rem;
            font-size: 1.2rem;
        }

        .background-image {
            display: block;
            position: absolute;
            top: 30%;
            left: 50%;
            z-index: -100;
            height: 90%;
            opacity: 0.3;
            transform: translate(-52%, -50%);
            background-image: url('../src/assets/images/background.png') center;
        }
    }

    @media (min-width: 1420px) {
        .categories {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;
export default Wrapper;
