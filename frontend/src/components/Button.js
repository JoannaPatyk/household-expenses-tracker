import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, version, onClick, type, isDisabled }) {
    return (
        <button type={type} onClick={onClick} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
};

Button.propTypes = {
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};

export default Button;
