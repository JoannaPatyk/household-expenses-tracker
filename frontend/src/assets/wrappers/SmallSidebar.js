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
        height: 100vh;
        width: 100vw;
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
        height: 100vh;
        width: 100vw;
        /* border-radius: 0.5rem; */
        background-color: var(--secondary-800);
        /* border-top: 10px solid var(--secondary-700);
        border-bottom: 10px solid var(--secondary-700); */
        /* padding: 1rem; */
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
        justify-content: flex-start;
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
        margin: 0;
    }

    .logo {
        height: 5.5rem;
        width: 5.5rem;
    }

    .logo-icon {
        font-size: 3.5rem;
    }

    .logo-title {
        font-size: 0.8rem;
    }

    #btn-back {
        color: var(--secondary-100);
    }

    #btn-back:hover {
        color: var(--primary-900);
    }

    .btn-open {
        position: absolute;
        top: 10px;
        left: 10px;
    }

    @media (max-width: 450px) {
        .nav-link {
            font-size: 0.8rem;
            width: 250px;
        }
    }

    @media (min-width: 920px) {
        display: none;
    }
`;
export default Wrapper;
