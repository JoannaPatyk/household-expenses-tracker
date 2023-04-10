import React from 'react';
import PropTypes from 'prop-types';
import { usePromiseTracker } from 'react-promise-tracker';
import * as Loader from 'react-loader-spinner';
import Wrapper from '../assets/wrappers/LoadingIndicator';

function LoadingIndicator(props) {
    const { promiseInProgress } = usePromiseTracker({ area: props.area });

    return (
        promiseInProgress && (
            <Wrapper>
                <div className="loading-indicator-container">
                    <Loader.Triangle color="#ffc125" height="80" width="80" />
                    <p className="loading-indicator-text">
                        oczekiwanie na serwer <br /> może trochę potrwać (~30sek)...
                    </p>
                </div>
            </Wrapper>
        )
    );
}

LoadingIndicator.propTypes = {
    area: PropTypes.string
};

export default LoadingIndicator;
