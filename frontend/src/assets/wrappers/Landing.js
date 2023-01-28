import styled from 'styled-components';

const Wrapper = styled.main`
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 3.5rem 0;
    }

    h1 {
        color: var(--grey-600);
        font-weight: 200;
        font-size: 3rem;
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

    .btn {
        font-size: 1.2rem;
    }
`;
export default Wrapper;
