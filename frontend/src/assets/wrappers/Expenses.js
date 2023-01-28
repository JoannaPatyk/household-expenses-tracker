import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .title {
        display: grid;
        grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;
        place-items: center;
        box-shadow: var(--shadow-3);
        letter-spacing: var(--letterSpacing);
        background-color: var(--primary-100);
    }

    .expense-container {
        display: grid;
        grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;
        place-items: center;
        box-shadow: var(--shadow-3);
    }

    p,
    h5 {
        margin: 0.8rem;
        color: var(--grey-500);
        font-size: 0.95rem;
    }

    h4 {
        margin: 0.5rem;
        color: var(--primary-500);
        font-weight: 600;
        text-transform: uppercase;
    }

    .btn-container {
        display: flex;
        flex-direction: column;
    }

    .btn {
        font-size: 0.5rem;
        width: 5rem;
    }

    #big-btn {
        display: none;
    }

    #small-btn {
        font-size: 0.8rem;
        width: 1.5rem;
        background-color: transparent;
        box-shadow: none;
        margin: 0.1rem;
    }

    @media (max-width: 421px) {
        p,
        h5,
        h4 {
            margin: 0.5rem;
        }

        h5 {
            font-size: 0.6rem;
        }

        p,
        h4 {
            font-size: 0.5rem;
        }

        #small-btn {
            width: 1rem;
            margin: 0;
            padding: 0;
        }
    }

    @media (min-width: 1125px) {
        p,
        h5,
        h4 {
            margin: 1rem;
        }

        h5 {
            font-size: 0.8rem;
        }

        p,
        h4 {
            font-size: 1rem;
        }

        .btn-container {
            flex-direction: row;
        }

        #big-btn {
            display: block;
        }

        #small-btn {
            display: none;
        }

        .btn {
            margin: 0.5rem;
            font-size: 0.9rem;
        }
    }
`;

export default Wrapper;
