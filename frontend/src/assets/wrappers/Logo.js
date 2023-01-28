import styled from 'styled-components';

const Wrapper = styled.nav`
    .container {
        width: 100%;
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo-container {
        height: 10rem;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo {
        height: 8rem;
    }

    h1 {
        font-size: 2rem;
    }

    h4 {
        letter-spacing: var(--letterSpacing);
        text-align: center;
    }

    h1,
    h4 {
        margin: 0.5rem;
        font-weight: 400;
        text-transform: uppercase;
    }

    span {
        color: var(--primary-800);
    }
`;

export default Wrapper;
