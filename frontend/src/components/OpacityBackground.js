import React from 'react';
import PropTypes from 'prop-types';
import { usePromiseTracker } from 'react-promise-tracker';

function OpacityBackground(props) {
    const { promiseInProgress } = usePromiseTracker({ area: props.area });

    return (
        promiseInProgress && (
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100vw',
                    height: '100vh',
                    background: '#1c1625',
                    opacity: '0.9'
                }}
            ></div>
        )
    );
}

OpacityBackground.propTypes = {
    area: PropTypes.string
};

export default OpacityBackground;
