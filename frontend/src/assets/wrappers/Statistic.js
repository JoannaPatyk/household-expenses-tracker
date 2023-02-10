import styled from 'styled-components';

const Wrapper = styled.div`
    .statistics-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 3rem;
    }

    .chart-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 80%;
    }

    .chart-container h3 {
        text-transform: uppercase;
        margin: 2.5rem;
    }
`;

export default Wrapper;
