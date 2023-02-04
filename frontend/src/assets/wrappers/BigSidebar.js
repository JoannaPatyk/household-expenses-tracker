import styled from 'styled-components';

const Wrapper = styled.div`
    display: none;

    @media (min-width: 992px) {
        display: block;
        background-color: var(--secondary-800);
        box-shadow: var(--shadow-4);

        .sidebar-container {
            min-height: 98.25vh;
            height: 90%;
            width: 400px;
            margin-left: -400px;
            transition: var(--transition);
        }

        .content {
            position: sticky;
            top: 10%;
        }

        .show-sidebar {
            margin-left: 0;
        }

        .nav-links {
            display: flex;
            flex-direction: column;
            padding-top: 2.5rem;
        }

        .nav-link {
            display: flex;
            align-items: center;
            color: var(--secondary-400);
            padding: 1rem 0;
            padding-left: 2rem;
            font-size: 1rem;
            font-weight: 400;
            text-transform: uppercase;
            transition: var(--transition);
        }

        .nav-link:hover {
            background: var(--secondary-200);
            padding-left: 3rem;
            color: var(--secondary-800);
        }

        .icon {
            font-size: 1.8rem;
            margin-right: 1rem;
            display: grid;
            place-items: center;
            transition: var(--transition);
        }

        .active {
            color: var(--primary-800);
        }
    }
`;

export default Wrapper;
