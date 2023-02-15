import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 80vh;
        width: 75vw;
        border-radius: 0.5rem;
        border-top: 10px solid var(--primary-900);
        border-bottom: 10px solid var(--primary-900);
        box-shadow: var(--shadow-4);
    }

    .logo {
        width: 8rem;
    }

    h2 {
        font-size: 1.2rem;
        text-align: center;
        text-transform: uppercase;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    .btn {
        margin-top: 3rem;
        font-size: 1.2rem;
        width: 60%;
    }

    .bg {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -100;
        height: 150%;
        opacity: 0.2;
        transform: translate(-52%, -50%);
        background-image: url('../src/assets/images/background.png') center;
    }

    @media (max-width: 622px) {
        h2 {
            font-size: 1rem;
            padding: 0 1rem;
        }
        .form-input {
            font-size: 0.8rem;
        }

        .btn {
            width: 50%;
            font-size: 0.9rem;
        }
    }

    @media (min-width: 992px) {
        .form-container {
            width: 55vw;
        }
    }

    @media (min-width: 1220px) {
        .form-container {
            width: 45vw;
        }
    }

    @media (min-width: 1620px) {
        .form-container {
            width: 35vw;
        }
    }
`;

export default Wrapper;
