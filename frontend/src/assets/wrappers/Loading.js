import styled from 'styled-components';

const Wrapper = styled.div`
    .spinner-container {
        display: none; // NOTE: temporary switched off
        position: relative;
        width: 115%;
        height: 100%;
    }

    #spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export default Wrapper;
