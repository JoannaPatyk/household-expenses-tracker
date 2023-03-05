import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 85vh;
        width: 60vw;
        border-radius: 0.5rem;
        border-top: 10px solid var(--secondary-700);
        border-bottom: 10px solid var(--secondary-700);
        box-shadow: var(--shadow-4);
        background-color: transparent;
    }

    h2 {
        font-size: 1.2rem;
        text-align: center;
        text-transform: uppercase;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 0.6rem;
        letter-spacing: var(--letterSpacing);
    }

    .btn {
        margin-top: 1rem;
        font-size: 1.2rem;
        width: 60%;
    }

    .background-image {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -100;
        height: 100%;
        opacity: 0.2;
        transform: translate(-52%, -50%);
        background-image: url('../src/assets/images/background.png') center;
    }

    @media (max-width: 622px) {
        .form-container {
            width: 85vw;
            height: 80vh;
        }

        h2 {
            font-size: 1rem;
            padding: 0 1rem;
        }

        .logo {
            height: 5rem;
            width: 5rem;
        }

        .logo-title {
            font-size: 0.8rem !important;
        }

        .logo-icon {
            font-size: 3rem;
        }

        .form-input {
            font-size: 0.8rem;
            margin: 0.25rem;
        }

        .background-image {
            display: none;
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
