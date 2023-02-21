import styled from 'styled-components';

const Wrapper = styled.nav`
    .logo-container {
        width: 100%;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo {
        height: 6.75rem;
        width: 6.75rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--primary-600);
        box-shadow: var(--shadow-4);
        border-radius: 50%;
        background-color: transparent;
    }

    .logo-icon {
        font-size: 4rem;
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
        font-weight: 400;
        text-transform: uppercase;
    }

    span {
        font-weight: 900;
    }
`;

export default Wrapper;
