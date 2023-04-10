import React from 'react';
import PropTypes from 'prop-types';

function InfoBoxes({ title, icon, amount, version }) {
    return (
        <div className="info-box">
            <h2>{title}</h2>
            <h2>{icon}</h2>
            <p className={version}>{amount} PLN</p>
        </div>
    );
}

InfoBoxes.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object,
    version: PropTypes.string,
    amount: PropTypes.number
};

export default InfoBoxes;
