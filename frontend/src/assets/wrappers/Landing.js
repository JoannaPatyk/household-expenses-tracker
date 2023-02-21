import styled from 'styled-components';

const Wrapper = styled.main`
    .main-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        overflow: hidden;
    }

    .landing-container {
        position: relative;
    }

    .logo-container {
        margin-top: 3rem;
    }

    .landing-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 1.5rem 0;
    }

    h1 {
        margin: 0 2rem 1rem 2rem;
        font-weight: 400;
        font-size: 1.5rem;
        text-align: center;
        line-height: 3rem;
    }

    h5 {
        font-weight: 400;
        line-height: 28px;
    }

    p {
        font-weight: 400;
        font-size: 0.6rem;
        margin-top: -0.2rem;
        padding-bottom: 1rem;
        letter-spacing: 0.1rem;
        text-align: center;
        line-height: 1rem;
    }

    span {
        font-weight: 800;
    }

    .goals-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        max-width: 1440px;
    }

    .goal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        letter-spacing: var(--letterSpacing);
        padding: 0.5rem 0 1rem 0;
        margin: 1rem 2rem -1rem 2rem;
    }

    .goal-icone {
        font-size: 2.5rem;
        margin: 1rem;
    }

    .btn {
        font-size: 1.2rem;
    }

    .bg {
        position: absolute;
        top: 90%;
        left: 50%;
        z-index: -100;
        height: 300%;
        opacity: 0.2;
        transform: translate(-52%, -50%);
        background-image: url('../src/assets/images/background.png') center;
    }

    @media (max-width: 640px) {
        .landing-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .logo {
            height: 8rem;
            width: 8rem;
        }

        .logo-title {
            font-size: 1.1rem;
        }

        .goals-container {
            margin-bottom: 2rem;
        }

        h1 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1rem;
        }

        h5 {
            font-size: 0.7rem;
        }

        .bg {
            top: 50%;
            height: 100%;
        }
    }

    @media (min-width: 1050px) {
        h1 {
            font-size: 2.5rem;
        }

        .btn {
            font-size: 1.5rem;
        }

        .goals-container {
            flex-direction: row;
        }

        .goal {
            width: 25%;
        }
    }
`;
export default Wrapper;
