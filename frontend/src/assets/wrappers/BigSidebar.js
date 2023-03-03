import styled from 'styled-components';

const Wrapper = styled.div`
    display: none;

    @media (min-width: 920px) {
        display: block;
        background-color: var(--secondary-800);
        box-shadow: var(--shadow-4);

        .sidebar-container {
            min-height: 100vh;
            height: 100%;
            width: 350px;
            margin-left: -350px;
            padding-top: 5rem;
            transition: var(--transition);
        }

        .show-sidebar {
            margin-left: 0;
        }

        .nav-links {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-top: 1rem;
        }

        .nav-link {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 1.2rem 2rem;
            text-transform: uppercase;
            transition: var(--transition);
        }

        .icon {
            display: grid;
            place-items: center;
            font-size: 1.7rem;
            margin-right: 1rem;
            transition: var(--transition);
        }

        .logo {
            margin-bottom: 1rem;
        }
    }
`;

export default Wrapper;
