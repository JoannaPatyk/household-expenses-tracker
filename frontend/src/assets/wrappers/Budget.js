import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;

    table {
        width: 90vw;
        padding-top: 4rem;
    }

    .title {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
        box-shadow: var(--shadow-4);
        letter-spacing: var(--letterSpacing);
        background-color: var(--secondary-800);
    }

    .budget-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
        box-shadow: var(--shadow-4);
    }

    .category {
        text-align: center;
    }

    #input {
        width: 2rem;
        text-align: center;
        font-size: inherit;
        color: inherit;
        border-bottom: 2px solid #ffcc6660;
    }

    #input:focus {
        width: 6rem;
        border-bottom-color: #ffcc66ae;
    }

    @media (min-width: 540px) {
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
            text-transform: uppercase;
        }

        #input {
            width: 4rem;
            margin-right: 5px;
        }

        #input:focus {
            width: 5rem;
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
            width: 8rem;
        }

        #input:focus {
            width: 13rem;
        }
    }
`;
export default Wrapper;
