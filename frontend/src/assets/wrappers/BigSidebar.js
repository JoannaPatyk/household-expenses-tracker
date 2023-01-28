import styled from 'styled-components';

const Wrapper = styled.aside`
    display: none;

    @media (min-width: 992px) {
        display: block;

        .sidebar-container {
            background: var(--white);
            min-height: 100vh;
            height: 100%;
            width: 280px;
            margin-left: -280px;
            transition: var(--transition);
        }

        .content {
            position: sticky;
            top: 0;
        }

        .show-sidebar {
            margin-left: 0;
        }

        .nav-links {
            display: flex;
            flex-direction: column;
            padding-top: 5rem;
        }

        .nav-link {
            display: flex;
            align-items: center;
            color: var(--grey-400);
            padding: 1rem 0;
            padding-left: 2rem;
            font-family: var(--logoFont);
            font-size: 1.2rem;
            text-transform: uppercase;
            transition: var(--transition);
        }

        .nav-link:hover {
            background: var(--primary-200);
            padding-left: 3rem;
            color: var(--primary-700);
        }

        .icon {
            font-size: 2rem;
            margin-right: 1rem;
            display: grid;
            place-items: center;
            transition: var(--transition);
        }

        .active {
            color: var(--primary-700);
        }
    }
`;
export default Wrapper;
