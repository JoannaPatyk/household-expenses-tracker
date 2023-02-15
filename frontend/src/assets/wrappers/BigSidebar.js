import styled from 'styled-components';

const Wrapper = styled.div`
    display: none;

    @media (min-width: 992px) {
        display: block;
        background-color: var(--secondary-800);
        box-shadow: var(--shadow-4);

        .sidebar-container {
            min-height: 100vh;
            height: 100%;
            width: 350px;
            margin-left: -350px;
            padding-top: 6rem;
            transition: var(--transition);
        }

        .show-sidebar {
            margin-left: 0;
        }

        .logo-container {
            margin-bottom: 2rem;
        }
    }
`;

export default Wrapper;
