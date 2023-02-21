import styled from 'styled-components';

const Wrapper = styled.main`
    .group-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        text-align: center;
    }

    h3 {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }

    .members {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 50vw;
    }

    .member {
        display: flex;
        align-items: center;
        position: relative;
        width: 24vw;
        min-height: 40px;
        padding-left: 1rem;
        margin: 0.5rem;
        color: var(--secondary-900);
        font-size: 1rem;
        border-radius: 20px;
        background-color: var(--primary-300);
    }

    .delete-btn {
        position: absolute;
        top: 50%;
        right: 2%;
        transform: translateY(-50%);
        font-size: 1.8rem;
        color: var(--secondary-900);
        transition: var(--transition);
        cursor: pointer;
    }

    .delete-btn:hover {
        color: var(--primary-800);
    }

    span {
        color: var(--primary-900);
        text-transform: uppercase;
    }

    #btn-save,
    #btn-add {
        width: 24vw;
    }

    .form-container {
        text-align: center;
        margin-top: 1rem;
    }

    .edit-group-container {
        min-width: 40vw;
    }

    .edit-group-container input {
        margin-top: 0.2rem;
    }
`;
export default Wrapper;
