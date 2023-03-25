import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ percentage }) {
    return (
        <div style={{ width: '8vw', backgroundColor: '#ff8a66c3', borderRadius: '5px', marginBottom: '5px' }}>
            <div
                style={{
                    width: `${percentage}%`,
                    backgroundColor: percentage > 100 ? '#db2d2d' : '#ffcc66',
                    height: '10px',
                    maxWidth: '8vw',
                    borderRadius: '5px'
                }}
            ></div>
        </div>
    );
}
ProgressBar.propTypes = {
    percentage: PropTypes.number
};

export default ProgressBar;
