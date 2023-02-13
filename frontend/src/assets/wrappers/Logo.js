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
        height: 10rem;
        height: 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo-img {
        height: 8rem;
    }

    h1 {
        font-size: 2rem;
    }

    h4 {
        letter-spacing: var(--letterSpacing);
        color: var(--secondary-400);
        text-align: center;
    }

    h1,
    h4 {
        margin: 1.1rem;
        font-weight: 400;
        text-transform: uppercase;
    }

    span {
        color: var(--primary-800);
        font-weight: 800;
    }
`;

export default Wrapper;
