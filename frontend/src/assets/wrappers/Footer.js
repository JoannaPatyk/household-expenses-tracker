import styled from 'styled-components';

const Wrapper = styled.div`
    .footer-container {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 2rem;
        width: 100%;
        background-color: var(--secondary-800);
    }

    p {
        text-align: center;
        line-height: 2rem;
        font-size: 0.7rem;
    }
`;

export default Wrapper;
