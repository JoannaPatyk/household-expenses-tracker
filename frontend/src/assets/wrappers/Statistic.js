import styled from 'styled-components';

const Wrapper = styled.div`
    .statistics-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 4rem;
        min-height: 100vh;
    }

    .chart-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 90%;
        padding-top: 3rem;
        color: var(--secondary-500);
    }

    .chart-container h3 {
        font-size: 1.3rem;
        text-transform: uppercase;
        font-size: 1.3rem;
        text-align: center;
        letter-spacing: var(--letterSpacing);
    }

    @media (max-width: 960px) {
        .statistics-container {
            padding-top: 0;
        }

        .chart-container {
            padding-top: 0;
            min-height: 100vh;
            width: 100%;
        }

        .chart-container h3 {
            font-size: 1rem;
        }
    }
`;

export default Wrapper;
