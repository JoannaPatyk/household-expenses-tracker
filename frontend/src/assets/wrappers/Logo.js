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
        margin: 1rem 0;
    }

    .logo {
        height: 6.75rem;
        width: 6.75rem;
        justify-content: center;
        border: 2px solid var(--secondary-400);
        box-shadow: var(--shadow-4);
        border-radius: 50%;
        background-color: transparent;
    }

    .logo-icon {
        font-size: 4.5rem;
    }

    h1 {
        font-size: 2rem;
    }

    .logo-title {
        letter-spacing: var(--letterSpacing);
        text-align: center;
    }

    h1,
    h4 {
        margin: 1.1rem;
        font-weight: 100;
        text-transform: uppercase;
    }

    span {
        font-weight: 900;
    }
`;

export default Wrapper;
