import styled from 'styled-components';

const Wrapper = styled.div`
    .panel-container {
        width: 100%;
        min-height: 15vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-between;
        align-items: center;
        column-gap: 20px;
        text-align: center;
    }

    h2,
    p {
        margin: 1rem;
        text-transform: uppercase;
    }

    p {
        font-size: 2rem;
        color: var(--primary-900);
        font-family: 'Rubik Gemstones', cursive;
    }

    .info-box {
        position: relative;
        border-radius: 20px;
        color: var(--secondary-600);
        border: 2px solid var(--primary-900);
        box-shadow: var(--shadow-5);
        overflow: hidden;
    }

    .icon {
        position: absolute;
        right: 5%;
        top: 50%;
        transform: translateY(-50%);
        font-size: 5rem;
        z-index: -100;
        opacity: 0.2;
    }

    .minus {
        color: var(--red);
    }

    .plus {
        color: var(--green);
    }

    .edit {
        text-decoration: none;
        cursor: pointer;
        transition: var(--transition);
    }

    .edit:hover {
        scale: 0.99;
    }

    .planned-amount {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.5rem;
        p {
            margin: 0;
        }
    }

    .btn-expenses {
        height: 2rem;
        font-size: 2rem;
        color: var(--primary-900);
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    @media (max-width: 1305px) {
        p {
            font-size: 1.7rem;
        }
    }

    @media (max-width: 1130px) {
        p {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 992px) {
        .panel-container {
            width: 100%;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            row-gap: 30px;
        }

        .info-box {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
`;

export default Wrapper;
