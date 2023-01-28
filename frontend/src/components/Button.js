import React from 'react';
import PropTypes from 'prop-types';

function Button({ id, children, version, onClick, type, isDisabled }) {
    return (
        <button id={id} type={type} onClick={onClick} disabled={isDisabled} className={`btn btn-${version}`}>
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
    id: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};

export default Button;
