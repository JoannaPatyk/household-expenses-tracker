import styled from 'styled-components';

const Wrapper = styled.div`
    .statistics-container,
    .chart-container {
        display: flex;
        align-items: center;
    }

    .statistics-container {
        position: relative;
        margin-top: 2rem;
        height: 55vh;
        width: 100%;
        overflow: hidden;
        border-radius: 20px;
        border: 2px solid var(--primary-900);
        box-shadow: var(--shadow-5);
    }

    .chart-container {
        justify-content: center;
        flex-direction: column;
        width: 100%;
        h3 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;
            text-align: center;
            letter-spacing: var(--letterSpacing);
        }
    }

    .btn-toggle-chart {
        position: absolute;
        top: 0;
        width: 25px;
        height: 25px;
        font-size: 1.1rem;
        padding: 0.5rem;
        background-color: var(--primary-900);
    }

    .left {
        left: 0;
    }

    .right {
        right: 0;
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
