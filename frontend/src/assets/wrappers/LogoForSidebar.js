import styled from 'styled-components';

const Wrapper = styled.nav`
    .logo-container,
    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo-container {
        width: 100%;
        margin-top: 1rem;
    }

    .logo {
        height: 6.5rem;
        width: 6.5rem;
        justify-content: center;
        border: 2px solid var(--primary-700);
        box-shadow: var(--shadow-5);
        border-radius: 50%;
        background-color: transparent;
    }

    .logo-icon {
        font-size: 4rem;
        color: var(--primary-500);
    }

    h1 {
        font-size: 2rem;
    }

    .logo-title {
        letter-spacing: var(--letterSpacing);
        color: var(--primary-500);
        text-align: center;
    }

    h1,
    h4 {
        margin: 1.1rem;
        font-weight: 400;
        text-transform: uppercase;
    }

    span {
        font-weight: 900;
        color: var(--primary-900);
    }
`;

export default Wrapper;
