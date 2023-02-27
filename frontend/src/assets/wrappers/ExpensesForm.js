import styled from 'styled-components';

const Wrapper = styled.div`
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    h2 {
        font-size: 1rem;
    }

    #categorySelect,
    #amountInput,
    #commentInput {
        width: 15rem;
    }

    #categorySelect:focus,
    #amountInput:focus,
    #commentInput:focus {
        width: 14rem;
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
        width: 15rem;
    }

    .editCategoryBtn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }

    .background-image {
        display: none;
    }

    @media (min-width: 1015px) {
        h2 {
            font-size: 1.8rem;
        }

        #categorySelect,
        #amountInput,
        #commentInput {
            width: 25rem;
        }

        #categorySelect:focus,
        #amountInput:focus,
        #commentInput:focus {
            width: 24rem;
        }

        .btn {
            width: 25rem;
            font-size: 1.2rem;
        }

        .background-image {
            display: block;
            position: absolute;
            top: 40%;
            left: 50%;
            z-index: -100;
            height: 100%;
            opacity: 0.3;
            transform: translate(-52%, -50%);
            background-image: url('../src/assets/images/background.png') center;
        }
    }
`;

export default Wrapper;
