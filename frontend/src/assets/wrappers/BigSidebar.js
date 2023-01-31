import styled from 'styled-components';

const Wrapper = styled.div`
    display: none;

    @media (min-width: 992px) {
        display: block;
        background-color: var(--primary-100);
        box-shadow: var(--shadow-4);

        .sidebar-container {
            height: 90vh;
            width: 300px;
            margin-left: -300px;
            transition: var(--transition);
        }

        .content {
            position: sticky;
            top: 0;
        }

        .logo-container {
            /* margin-top: -0.2rem; */
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
            color: var(--grey-400);
            padding: 1rem 0;
            padding-left: 2rem;
            font-size: 1rem;
            font-weight: 400;
            text-transform: uppercase;
            transition: var(--transition);
        }

        .nav-link:hover {
            background: var(--primary-200);
            padding-left: 3rem;
            color: var(--primary-800);
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
