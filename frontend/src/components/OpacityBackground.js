import React from 'react';
import PropTypes from 'prop-types';
import { usePromiseTracker } from 'react-promise-tracker';

function OpacityBackground({ area }) {
    const { promiseInProgress } = usePromiseTracker({ area });

    const backgroundStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        background: '#1c1625',
        opacity: '0.9'
    };

    return promiseInProgress ? <div style={backgroundStyle}></div> : null;
}

OpacityBackground.propTypes = {
    area: PropTypes.string
};

export default OpacityBackground;
