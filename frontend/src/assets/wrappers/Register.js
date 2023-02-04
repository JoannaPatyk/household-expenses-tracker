import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .registration-form {
        position: relative;
        height: 70vh;
        width: 30vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 0.5rem;
        border-top: 10px solid var(--secondary-800);
        border-bottom: 10px solid var(--secondary-800);
        box-shadow: var(--shadow-4);
    }

    .logo {
        margin-top: 3rem;
        width: 25%;
    }

    h2 {
        font-size: 1.2rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    .btn-container {
        display: flex;
        flex-direction: column;
        margin-top: 1.5rem;
    }

    .btn {
        font-size: 1.2rem;
    }
`;

export default Wrapper;
