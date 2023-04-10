import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ percentage }) {
    const containerStyle = {
        width: '8vw',
        backgroundColor: '#ff8a66c3',
        borderRadius: '5px',
        marginBottom: '5px'
    };
    const progressStyle = {
        width: `${percentage}%`,
        backgroundColor: percentage > 100 ? '#db2d2d' : '#ffcc66',
        height: '10px',
        maxWidth: '8vw',
        borderRadius: '5px'
    };

    return (
        <div style={containerStyle}>
            <div style={progressStyle}></div>
        </div>
    );
}

ProgressBar.propTypes = {
    percentage: PropTypes.number
};

ProgressBar.defaultProps = {
    percentage: 0
};

export default ProgressBar;
