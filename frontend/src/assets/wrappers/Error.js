import styled from 'styled-components';

const Wrapper = styled.div`
    .error-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-height: 100vh;
        overflow: hidden;
    }

    .background-img {
        position: absolute;
        top: 45%;
        left: 49%;
        z-index: -100;
        transform: translate(-50%, -50%);
        width: 60%;
        opacity: 0.4;
    }

    .not-found-img {
        font-size: 6rem;
    }

    h3 {
        font-size: 2rem;
        margin-top: 1rem;
    }

    p {
        font-size: 0.9rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    @media (max-width: 620px) {
        h3 {
            font-size: 1.5rem;
        }
        .background-img {
            width: 180%;
        }
    }
`;

export default Wrapper;
