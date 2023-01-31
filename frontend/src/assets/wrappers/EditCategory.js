import styled from 'styled-components';

const Wrapper = styled.div`
    .container {
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h2 {
        font-size: 1.2rem;
    }

    .edit-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem;
    }

    input {
        width: 80vw;
    }

    .categories {
        display: grid;
        grid-template-columns: 1fr;
    }

    .category {
        position: relative;
        justify-self: center;
        font-size: 0.9rem;
        border-radius: var(--borderRadius);
        background-color: var(--primary-200);
        width: 60%;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem;
        padding-left: 0.5rem;
    }

    .btn {
        width: 300px;
        font-size: 1rem;
    }

    .back-btn {
        position: absolute;
        top: 2%;
        left: 2%;
        font-size: 1.4rem;
        color: var(--grey-600);
        transition: var(--transition);
        cursor: pointer;
    }

    .back-btn:hover {
        color: var(--primary-700);
    }

    .edit-btn {
        position: absolute;
        top: 30%;
        font-size: 1.4rem;
        color: var(--grey-600);
        transition: var(--transition);
        cursor: pointer;
    }

    .edit-btn:hover {
        color: var(--primary-700);
    }

    .edit {
        right: 12%;
    }

    .delete {
        right: 2%;
    }

    @media (min-width: 1220px) {
        h2 {
            font-size: 1.8rem;
        }

        .categories {
            grid-template-columns: 1fr 1fr;
            width: 70vw;
        }

        .category {
            width: 70%;
            margin: 1rem;
            padding-left: 1rem;
        }

        .btn {
            width: 350px;
            font-size: 1.2rem;
        }

        input {
            width: 45vw;
        }
    }
`;
export default Wrapper;
