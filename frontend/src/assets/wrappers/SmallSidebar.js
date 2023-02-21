import styled from 'styled-components';

const Wrapper = styled.aside`
    .sidebar-container {
        position: fixed;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
        opacity: 0;
        background: rgba(0, 0, 0, 0.85);
        transition: var(--transition);
    }

    .show-sidebar {
        z-index: 100;
        opacity: 1;
    }

    .small-sidebar-content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80vh;
        border-radius: 0.5rem;
        border-top: 10px solid var(--secondary-700);
        border-bottom: 10px solid var(--secondary-700);
        padding: 4rem 2rem;
        overflow: hidden;
    }

    .logo-container {
        margin-bottom: 2rem;
    }

    @media (min-width: 992px) {
        display: none;
    }
`;
export default Wrapper;
