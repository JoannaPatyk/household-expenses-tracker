import styled from 'styled-components';

const Wrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        display: block;
        width: 80vw;
        max-width: 500px;
        margin-bottom: 2rem;
    }

    h3 {
        margin-bottom: 0.5rem;
    }

    p {
        margin-top: 0;
        margin-bottom: 0.5rem;
        color: var(--grey-500);
    }

    a {
        margin: 0.5rem;
        text-transform: uppercase;
    }
`;

export default Wrapper;
