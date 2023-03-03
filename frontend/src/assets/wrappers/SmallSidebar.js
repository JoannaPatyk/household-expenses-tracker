import styled from 'styled-components';

const Wrapper = styled.aside`
    .sidebar-container,
    .small-sidebar-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sidebar-container {
        position: fixed;
        inset: 0;
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
        flex-direction: column;
        height: 90vh;
        width: 80vw;
        border-radius: 0.5rem;
        background-color: var(--secondary-800);
        border-top: 10px solid var(--secondary-700);
        border-bottom: 10px solid var(--secondary-700);
        padding: 1rem;
        overflow: hidden;
    }

    .nav-links {
        width: 300px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .nav-link {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 0;
        text-transform: uppercase;
        transition: var(--transition);
    }

    .icon {
        display: grid;
        place-items: center;
        font-size: 1.5rem;
        margin-right: 0.5rem;
        transition: var(--transition);
    }

    .logo-container {
        margin-bottom: 1rem;
    }

    .logo {
        font-size: 2rem;
    }

    #btn-back {
        color: var(--secondary-100);
    }

    #btn-back:hover {
        color: var(--primary-900);
    }

    @media (max-width: 450px) {
        .small-sidebar-content {
            height: 80vh;
        }

        .nav-link {
            font-size: 0.8rem;
            width: 250px;
            justify-content: flex-start;
        }
    }

    @media (min-width: 920px) {
        display: none;
    }
`;
export default Wrapper;
