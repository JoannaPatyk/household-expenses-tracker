import styled from 'styled-components';

const Wrapper = styled.div`
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: var(--borderRadius);
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

    @media (min-width: 992px) {
        .btn {
            font-size: 1rem;
        }

        .btn-hipster {
            width: 20rem;
        }

        .btn-hero {
            width: 20rem;
        }
    }
`;

export default Wrapper;
