import styled from 'styled-components';

const Wrapper = styled.section`
    .dashboard {
        display: grid;
        grid-template-columns: 1fr;
    }

    .dashboard-page {
        width: 90vw;
        margin: 0 auto;
        padding: 2rem 0;
    }

    .toggle-btn {
        margin-top: 2%;
        margin-left: 2%;
        background: transparent;
        border-color: transparent;
        font-size: 2rem;
        color: var(--primary-400);
        transition: var(--transition);
        cursor: pointer;
    }

    .toggle-btn:hover {
        transform: rotate(0.2turn);
        color: var(--primary-800);
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
