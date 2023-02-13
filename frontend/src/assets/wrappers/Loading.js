import styled from 'styled-components';

const Wrapper = styled.div`
    .spinner-container {
        width: 115%;
        height: 100%;
        position: relative;
        display: none; // NOTE: temporary switched off
    }

    #spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export default Wrapper;
