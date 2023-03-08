import React from 'react';
import PropTypes from 'prop-types';
import { usePromiseTracker } from 'react-promise-tracker';
import * as Loader from 'react-loader-spinner';

function LoadingIndicator(props) {
    const { promiseInProgress } = usePromiseTracker({ area: props.area });
    const style = { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };

    return (
        promiseInProgress && (
            <div style={style}>
                <Loader.Triangle color="#ffc125" height="80" width="80" />
                <p
                    style={{
                        position: 'fixed',
                        top: '110%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '300px',
                        textAlign: 'center',
                        fontSize: '.8rem',
                        color: '#ffc125'
                    }}
                >
                    oczekiwanie na serwer...
                </p>
            </div>
        )
    );
}

LoadingIndicator.propTypes = {
    area: PropTypes.string
};

export default LoadingIndicator;
