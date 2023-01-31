import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    table {
        width: 90vw;
    }

    .title {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
        box-shadow: var(--shadow-4);
        letter-spacing: var(--letterSpacing);
        background-color: var(--primary-100);
    }

    .budget-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
        box-shadow: var(--shadow-4);
    }

    th,
    td {
        margin: 0.2rem;
        color: var(--grey-500);
        text-align: center;
    }

    th,
    td {
        margin: 0.2rem;
        color: var(--grey-500);
        text-align: center;
    }

    td {
        font-size: 0.85rem;
    }

    th {
        margin: 1.2rem 0;
        color: var(--primary-800);
        font-weight: 600;
        font-size: 1rem;
        text-transform: uppercase;
    }

    .category {
        text-align: center;
    }

    input {
        width: 100px;
        height: 35px;
        text-align: center;
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        /* border: none; */
        /* background: transparent; */
    }
    @media (max-width: 500px) {
        table {
            width: 90vw;
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
        }

        input {
            width: 60px;
            margin-right: 5px;
        }
    }

    @media (min-width: 1125px) {
        table {
            width: 70vw;
        }
        th,
        td {
            margin: 1rem;
        }

        td {
            font-size: 0.95rem;
        }

        th {
            font-size: 1.1rem;
        }
    }
`;
export default Wrapper;
