import styled from 'styled-components';

const Wrapper = styled.nav`
    .logo-container,
    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo-container {
        width: 100%;
        margin-top: 1rem;

        .logo {
            height: 8rem;
            width: 8rem;
            justify-content: center;
            border: 2px solid var(--primary-700);
            box-shadow: var(--shadow-5);
            border-radius: 50%;
            background-color: transparent;
            .logo-icon {
                font-size: 5rem;
                color: var(--primary-500);
            }
        }

        .logo-title {
            margin: 1.1rem;
            color: var(--primary-300);
            text-align: center;
            font-size: 1.4rem;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: var(--letterSpacing);
            span {
                font-weight: 900;
                color: var(--primary-900);
            }
        }
    }
`;

export default Wrapper;
