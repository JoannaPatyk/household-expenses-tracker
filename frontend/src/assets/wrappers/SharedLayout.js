import styled from 'styled-components';

const Wrapper = styled.section`
    .dashboard {
        display: grid;
        grid-template-columns: 1fr;
        overflow: hidden;
    }

    .dashboard-page {
        position: relative;
        width: 90vw;
        height: 100%;
        margin: 0 auto;
    }

    .btn-toggle {
        position: absolute;
        top: 20px;
        margin-left: 1%;
        background: transparent;
        border-color: transparent;
        font-size: 2rem;
        color: var(--primary-800);
        transition: var(--transition);
        cursor: pointer;
    }

    .btn-toggle:hover {
        transform: rotate(0.2turn);
        color: var(--primary-300);
    }

    .bg {
        position: absolute;
        left: 20%;
        top: 40%;
        z-index: -100;
        height: 130%;
        opacity: 0.2;
        background-image: url('../src/assets/images/background.png');
    }

    @media (min-width: 992px) {
        .dashboard {
            grid-template-columns: auto 1fr;
        }
        .dashboard-page {
            width: 90%;
        }
    }
`;
export default Wrapper;
