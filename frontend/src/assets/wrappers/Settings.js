import styled from 'styled-components';

const Wrapper = styled.section`
    .dark {
        background-color: #888;
        color: #fff;
    }
    .light {
        background-color: #fff;
        color: #888;
    }
    .switch {
        display: inline-block;
        height: 34px;
        position: relative;
        width: 60px;
        margin: 1rem;
    }

    .switch input {
        display: none;
    }

    .switch-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        height: 90vh;
    }

    .switch-wrapper em {
        margin-left: 10px;
        font-size: 1rem;
    }

    .slider {
        background-color: var(--grey-100);
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: 0.4s;
    }

    .slider:before {
        background-color: var(--white);
        bottom: 4px;
        content: '';
        height: 26px;
        left: 4px;
        position: absolute;
        transition: 0.4s;
        width: 26px;
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    input:checked + .slider {
        background-color: var(--primary-800);
    }

    input:checked + .slider:before {
        transform: translateX(26px);
    }
`;
export default Wrapper;
