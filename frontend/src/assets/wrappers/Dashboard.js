import styled from 'styled-components';

const Wrapper = styled.div`
    .dashboard-container {
        h1 {
            font-size: 2rem;
            text-align: center;
        }

        h2 {
            text-align: center;
        }

        h5 {
            font-size: 0.85rem;
            font-weight: 400;
            letter-spacing: 0;
            text-align: center;
            padding: 0.25rem;
        }

        .main-container {
            min-height: 10vh;
            margin-top: 5rem;
            margin-bottom: 2rem;
            display: grid;
            grid-template-columns: 1.5fr 2.25fr;
            justify-content: space-between;
            column-gap: 30px;
            place-self: center;

            .date-container {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                border-radius: 20px;
                border: 2px solid var(--primary-900);
                box-shadow: var(--shadow-5);
            }

            h1 {
                margin: 0;
            }

            .date-container .btn-toggle {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 25px;
                height: 25px;
                font-size: 1.1rem;
                margin: 0 1rem;
                padding: 0.5rem;
                background-color: var(--primary-900);
                cursor: pointer;
            }

            .left {
                left: 0;
            }

            .right {
                right: 0;
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
            h1 {
                font-size: 1.3rem;
            }
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
                h1 {
                    font-size: 1.1rem;
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

    @media (max-width: 992px) {
        .dashboard-container {
            .main-container {
                h1 {
                    writing-mode: vertical-rl;
                    text-orientation: upright;
                    line-height: 18vh;
                }
            }
        }
    }
`;

export default Wrapper;
