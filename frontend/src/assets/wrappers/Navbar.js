import styled from 'styled-components';

const Wrapper = styled.nav`
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vw;
    background: var(--white);

    .logo-container {
        display: flex;
        align-items: center;
        width: 120px;
        display: none;
    }

    .nav-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn-toggle {
        position: absolute;
        top: 10%;
        left: -15%;
        background: transparent;
        border-color: transparent;
        font-size: 2rem;
        color: var(--primary-600);
        cursor: pointer;
    }

    .btn-container {
        position: relative;
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        font-size: 0.8rem;
        gap: 0 0.5rem;
        position: relative;
        box-shadow: var(--shadow-2);
    }

    @media (min-width: 992px) {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(280px);

        .logo-container {
            display: block;
        }

        .nav-center {
            width: 95%;
        }

        .btn {
            font-size: 1rem;
        }
    }
`;
export default Wrapper;
