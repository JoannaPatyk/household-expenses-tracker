import styled from 'styled-components';

const Wrapper = styled.div`
    .dashboard-container {
        h1 {
            font-size: 2rem;
            text-align: center;
            text-transform: uppercase;
        }

        h2 {
            text-align: center;
        }

        h5 {
            font-size: 0.85rem;
            font-weight: 400;
            letter-spacing: 0;
            padding: 0.25rem;
            opacity: 0.8;
            text-align: center;
        }

        .main-container {
            min-height: 10vh;
            margin-top: 6rem;
            margin-bottom: 2rem;
            display: grid;
            grid-template-columns: 1.5fr 2.25fr;
            justify-content: space-between;
            column-gap: 30px;
            place-self: center;
            h1 {
                margin: 0;
                line-height: 10vh;
                border-radius: 20px;
                border: 2px solid var(--primary-900);
                box-shadow: var(--shadow-5);
            }
        }

        .group-container {
            display: grid;
            justify-content: center;
            align-items: center;
            grid-template-columns: 1.25fr 2fr;
            height: 100%;
            border-radius: 20px;
            border: 2px solid var(--primary-900);
            box-shadow: var(--shadow-5);
            h2,
            h5 {
                margin: 0.25rem 0;
            }
            h5 {
                color: var(--secondary-500);
            }
        }
    }

    @media (max-width: 1305px) {
        .dashboard-container {
            h1 {
                font-size: 1.7rem;
            }

            h2 {
                font-size: 1.2rem;
            }

            h5 {
                font-size: 0.7rem;
            }
        }

        .main-container {
            h1 {
                font-size: 1.5rem;
            }
        }
    }

    @media (max-width: 1130px) {
        .dashboard-container {
            h2 {
                font-size: 1rem;
            }
            h5 {
                font-size: 0.6rem;
            }
        }
    }

    @media (max-width: 992px) {
        .dashboard-container {
            .main-container {
                height: 15vh;
                display: flex;
                justify-content: center;
                align-items: center;
                h1 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 15vh;
                    line-height: 4vh;
                    padding: 0.75rem;
                }
            }

            .group-container {
                display: flex;
                flex-direction: column;
                margin: 0.2rem;
                h5 {
                    padding: 0 1.5rem;
                }
            }
        }
    }
`;

export default Wrapper;
