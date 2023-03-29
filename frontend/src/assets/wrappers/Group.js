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
        padding-top: 5rem;
        text-align: center;
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

    #emailInput {
        width: 16rem;
        margin: 0.5rem;
        font-size: 1rem;
    }

    #emailInput:hover {
        width: 15rem;
    }

    .members,
    .decline-invitations,
    .received-invitations {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.8rem 0;
    }

    .decline-invitations {
        min-width: 30%;
    }

    .member {
        position: relative;
        display: flex;
        align-items: center;
        width: 85%;
        min-height: 40px;
        padding-left: 1rem;
        margin: 0.5rem;
        color: var(--secondary-900);
        font-size: 1rem;
        border-radius: 20px;
        background-color: var(--primary-300);
        box-shadow: var(--shadow-4);
    }

    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .invitation-container {
        padding: 1rem 0;
        align-items: center;
    }

    h2 {
        margin: 0.5rem 0;
        font-size: 1.3rem;
    }

    h3 {
        margin: 0.8rem 0;
        font-size: 1rem;
        text-transform: uppercase;
    }

    .description {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 90%;
        margin-top: 0.5rem;
    }

    h5 {
        font-size: 0.8rem;
        font-weight: 100;
        letter-spacing: 0;
        opacity: 0.8;
    }

    .btn {
        width: 16rem;
        height: 40px;
        margin: 1.2rem;
    }

    .delete-btn,
    .accept-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.5rem;
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

    @media (min-width: 620px) {
        .group-name {
            width: 90%;
        }

        #emailInput {
            width: 25rem;
        }

        #emailInput:hover {
            width: 24rem;
        }

        .btn {
            width: 25rem;
            font-size: 1.2rem;
        }
    }

    @media (min-width: 1380px) {
        .group-name-container {
            min-width: 70%;
        }

        .status-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            min-width: 85%;
        }

        .decline-invitations {
            border-left: 1px solid var(--primary-300);
            border-right: 1px solid var(--primary-300);
        }

        .members,
        .decline-invitations,
        .received-invitations {
            margin: 3.5rem 0;
        }

        .btn-save {
            right: 5%;
        }

        h2 {
            font-size: 1.8rem;
        }

        h3 {
            font-size: 1.1rem;
        }

        .invitation-container {
            min-width: 85%;
        }
    }
`;
export default Wrapper;
