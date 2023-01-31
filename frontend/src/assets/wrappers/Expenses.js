import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    table {
        width: 90vw;
    }

    .title {
        display: grid;
        grid-template-columns: 0.25fr 0.8fr 0.8fr 1fr 0.25fr;
        place-items: center;
        box-shadow: var(--shadow-4);
        letter-spacing: var(--letterSpacing);
        background-color: var(--primary-100);
    }

    .expense-container {
        display: grid;
        grid-template-columns: 0.25fr 0.8fr 0.8fr 1fr 0.25fr;
        place-items: center;
        box-shadow: var(--shadow-4);
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

    .btn-container {
        display: flex;
        flex-direction: column;
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

    .btn-icone {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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

        #btn {
            font-size: 1rem;
            width: 1.5rem;
            height: 1.5rem;
            margin: 0;
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