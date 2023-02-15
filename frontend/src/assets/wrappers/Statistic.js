import styled from 'styled-components';

const Wrapper = styled.div`
    .statistics-container {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .chart-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 80%;
        padding-top: 3.2rem;
        color: var(--secondary-500);
    }

    .chart-container h3 {
        font-size: 1.3rem;
        text-transform: uppercase;
        letter-spacing: var(--letterSpacing);
    }
`;

export default Wrapper;
