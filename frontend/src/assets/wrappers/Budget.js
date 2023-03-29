import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;

    .table-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    table {
        width: 90vw;
        padding-top: 5rem;
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

    .td-progress-bar {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .progress-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .title,
    .budget-container {
        display: grid;
        grid-template-columns: 0.8fr 1fr 1fr 0.5fr;
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
        width: 2.5rem;
        padding: 0;
        text-align: center;
        font-size: inherit;
        color: inherit;
        margin: 1rem 0.3rem;
        border-bottom: 2px solid #fada995f;
    }

    #input:focus {
        width: 3rem;
        border-bottom-color: #ffcc66ae;
    }

    #btn-clean {
        width: 16rem;
        height: 40px;
        margin: 2rem;
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
            width: 4rem;
        }

        #input:focus {
            width: 4.5rem;
        }

        #btn-clean {
            width: 25rem;
            font-size: 1.2rem;
        }
    }
`;
export default Wrapper;
