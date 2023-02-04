import styled from 'styled-components';

const Wrapper = styled.main`
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
    }

    .landing-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
        margin-bottom: 2.5rem;
    }

    h1 {
        color: var(--secondary-600);
        font-weight: 00;
        font-size: 2.5rem;
        margin: 0.3rem;
        text-align: center;
    }

    p {
        font-weight: 400;
        font-size: 0.6rem;
        margin-top: -0.2rem;
        letter-spacing: 0.1rem;
        text-align: center;
        line-height: 1rem;
    }

    span {
        font-weight: 800;
    }

    .goals-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
    }

    .goal {
        width: 22rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        letter-spacing: var(--letterSpacing);
        margin: 1.5rem 2rem;
    }

    .goal-icone {
        font-size: 2.2rem;
        margin: 1rem;
    }

    h5 {
        font-weight: 400;
        line-height: 28px;
    }

    .btn {
        font-size: 1.3rem;
    }
`;
export default Wrapper;
