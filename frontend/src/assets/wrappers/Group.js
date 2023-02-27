import styled from 'styled-components';

const Wrapper = styled.main`
    .group-container,
    .group-name-container,
    .status-container,
    .invitation-container {
        display: flex;
        flex-direction: column;
        min-width: 80%;
    }

    .group-container {
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        text-align: center;
        margin-top: 2rem;
    }

    .group-name {
        position: relative;
        width: 90vw;
        display: flex;
        justify-content: center;
    }

    .group-name-container {
        align-items: center;
    }

    #groupNameInput {
        width: 100%;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        border-radius: 20px;
        box-shadow: var(--shadow-4);
    }

    #groupNameInput:hover {
        transform: scale(0.98);
    }

    #emailInput {
        width: 20rem;
        margin: 0.5rem;
    }

    #emailInput::placeholder {
        font-size: 0.8rem;
    }

    .members,
    .decline-invitations,
    .received-invitations {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;
    }

    .member {
        position: relative;
        display: flex;
        align-items: center;
        width: 80vw;
        min-height: 40px;
        padding-left: 1rem;
        margin: 0.5rem;
        color: var(--secondary-900);
        font-size: 1rem;
        border-radius: 20px;
        background-color: var(--primary-300);
        box-shadow: var(--shadow-4);
    }

    .invitation-container {
        align-items: center;
    }

    h2 {
        margin: 0.5rem 0;
        font-size: 1.1rem;
    }

    h3 {
        margin: 0.5rem 0;
        font-size: 1rem;
        text-transform: uppercase;
    }

    .delete-btn,
    .accept-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 2rem;
        color: var(--secondary-800);
        font-weight: 100;
        transition: var(--transition);
        cursor: pointer;
    }

    .accept-btn {
        right: 11%;
    }

    .delete-btn {
        right: 2%;
    }

    .accept-btn:hover {
        color: var(--green);
        transform: translateY(-50%) scale(0.95);
    }

    .delete-btn:hover {
        color: var(--red);
        transform: translateY(-50%) scale(0.95);
    }

    #btn-add {
        width: 50vw;
    }

    @media (min-width: 620px) {
        .group-name {
            width: 90%;
        }

        .member {
            width: 70vw;
        }

        #emailInput {
            width: 28rem;
        }

        #emailInput:hover {
            width: 30rem;
        }

        #emailInput::placeholder {
            font-size: 1rem;
        }
    }

    @media (min-width: 820px) {
        #emailInput {
            width: 40rem;
        }
        #emailInput:hover {
            width: 42rem;
        }

        #emailInput::placeholder {
            font-size: 1rem;
        }
    }

    @media (min-width: 820px) {
        .member {
            width: 60vw;
        }
    }

    @media (min-width: 1020px) {
        .member {
            width: 50vw;
        }

        #btn-add {
            width: 40vw;
        }
    }

    @media (min-width: 1020px) {
        .member {
            width: 40vw;
        }

        #btn-add {
            width: 35vw;
        }
    }

    @media (min-width: 1380px) {
        .group-name-container {
            min-width: 85%;
        }

        .status-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            min-width: 85%;
        }

        .decline-invitations {
            border-left: 1px solid var(--primary-900);
            border-right: 1px solid var(--primary-900);
        }

        .members,
        .decline-invitations,
        .received-invitations {
            margin: 3.5rem 0;
        }

        .btn-save {
            right: 12%;
        }

        .member {
            width: 22rem;
        }

        h2 {
            font-size: 1.8rem;
        }

        h3 {
            font-size: 1.1rem;
        }

        #groupNameInput {
            width: 80%;
            font-size: 1.3rem;
        }

        .invitation-container {
            min-width: 85%;
        }

        #emailInput {
            width: 45rem;
        }

        #emailInput:hover {
            width: 47rem;
        }

        #emailInput::placeholder {
            font-size: 1.2rem;
        }

        #btn-add {
            width: 20vw;
        }
    }
`;
export default Wrapper;
