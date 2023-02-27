import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    table {
        width: 90vw;
        padding-top: 4rem;
    }

    th {
        font-size: 0.6rem;
        margin: 0.6rem 0rem;
        text-align: center;
    }

    td {
        font-size: 0.7rem;
        margin: 0.1rem 0;
        text-align: center;
        text-transform: uppercase;
    }

    .title,
    .budget-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
        box-shadow: var(--shadow-3);
    }

    .title {
        letter-spacing: var(--letterSpacing);
        background-color: var(--secondary-800);
    }

    .category {
        text-align: center;
    }

    #input {
        width: 4rem;
        text-align: center;
        font-size: inherit;
        color: inherit;
        margin-right: 0.2rem;
        border-bottom: 2px solid #fada995f;
    }

    #input:focus {
        width: 5rem;
        border-bottom-color: #ffcc66ae;
    }

    @media (min-width: 540px) {
        table {
            width: 90vw;
        }

        th {
            font-size: 0.9rem;
        }

        td {
            font-size: 1rem;
        }
    }

    @media (min-width: 980px) {
        table {
            width: 70vw;
        }

        th,
        td {
            margin: 0.6rem;
        }

        td {
            font-size: 0.95rem;
        }

        th {
            font-size: 1.1rem;
        }

        #input {
            width: 5rem;
        }

        #input:focus {
            width: 6rem;
        }
    }
`;
export default Wrapper;
