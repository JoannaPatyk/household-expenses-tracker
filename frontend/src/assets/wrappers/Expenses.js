import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;

    table {
        width: 90vw;
        padding-top: 5rem;
    }

    td:nth-child(2) {
        text-transform: uppercase;
    }

    .expenses-title,
    .expense-container {
        display: grid;
        grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 2fr 0.5fr;
        place-items: center;
        box-shadow: var(--shadow-3);
    }

    .expenses-title {
        letter-spacing: var(--letterSpacing);
        background-color: var(--secondary-800);
    }

    .btn-container {
        display: flex;
        flex-direction: column;
        margin: 0;
    }

    #btn {
        position: relative;
        font-size: 1.5rem;
        width: 2rem;
        height: 2rem;
        background-color: transparent;
        box-shadow: none;
        margin: 0.1rem;
    }

    @media (max-width: 600px) {
        table {
            width: 100vw;
        }

        th {
            font-size: 0.6rem;
            margin: 0.8rem 0;
            text-align: center;
        }

        td {
            font-size: 0.5rem;
            margin: 0.7rem 0.3rem;
            text-align: center;
        }

        th:nth-child(6),
        td:nth-child(6) {
            display: none;
        }

        td:nth-child(3) {
            font-size: 0.5rem;
        }

        .expenses-title {
            grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
        }

        .expense-container {
            grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
        }

        #btn {
            font-size: 1rem;
            width: 1.5rem;
            height: 1.5rem;
            margin: 0;
        }
    }

    @media (max-width: 700px) {
        th {
            font-size: 0.8rem;
        }

        td {
            font-size: 0.8rem;
            margin: 0.7rem 0.3rem;
        }

        th:nth-child(6),
        td:nth-child(6) {
            display: none;
        }

        .expenses-title {
            display: grid;
            grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
        }

        .expense-container {
            grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
        }
    }

    @media (min-width: 1280px) {
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

        .btn-container {
            flex-direction: row;
        }

        .btn {
            margin: 0.5rem;
            font-size: 0.8rem;
        }
    }
`;

export default Wrapper;
