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
        text-transform: uppercase;
    }

    h3 {
    }

    input {
        width: 40vw;
    }

    .categories {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .category {
        position: relative;
        width: 250px;
        height: 50px;
        border-radius: var(--borderRadius);
        background-color: var(--primary-300);
        line-height: 50px;
        margin: 1rem;
        padding-left: 1rem;
    }

    .edit-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow-2);
        margin: 1rem;
    }

    .btn {
        width: 350px;
        font-size: 14px;
    }

    .edit-button {
        position: absolute;
        top: 30%;
        font-size: 1.4rem;
        color: var(--grey-600);
        transition: var(--transition);
        cursor: pointer;
    }

    .edit-button:hover {
        color: var(--primary-700);
    }

    .edit {
        right: 12%;
    }

    .delete {
        right: 2%;
    }
`;
export default Wrapper;
