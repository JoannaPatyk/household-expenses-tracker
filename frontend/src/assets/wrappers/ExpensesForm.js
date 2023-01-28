import styled from 'styled-components';

const Wrapper = styled.div`
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 55vh;
        width: 100vh;

        border-radius: var(--borderRadius);
    }

    h2 {
        font-weight: 300;
    }

    .logo {
        display: none;
    }

    .categories-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .expense-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .btn {
        font-size: medium;
    }

    .btn-hipster {
        width: 20rem;
    }

    @media (min-width: 992px) {
        position: absolute;
        top: 35%;
        left: calc(50% + 140px);
        transform: translateX(-50%);

        .form-container {
            box-shadow: 0 0 15px var(--grey-600);
        }

        .logo {
            display: block;
        }
        .btn {
            font-size: 1rem;
        }
    }
`;

export default Wrapper;
