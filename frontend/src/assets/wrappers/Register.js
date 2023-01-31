import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;

    .form {
        position: relative;
        height: 70vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
    }

    .logo {
        margin-top: -7rem;
    }

    h4 {
        display: none;
    }

    h2 {
        font-size: 1.2rem;
        margin-top: -2rem;
    }

    .back-btn {
        position: absolute;
        top: 2%;
        left: 2%;
        font-size: 2rem;
        color: var(--grey-600);
        transition: var(--transition);
        cursor: pointer;
    }

    .btn {
        font-size: 1.2rem;
    }

    .back-btn:hover {
        color: var(--primary-700);
    }
`;

export default Wrapper;
