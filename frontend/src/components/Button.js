import React from 'react';
import PropTypes from 'prop-types';

function Button({ id, children, version = 'primary', onClick, type = 'button', isDisabled = false }) {
    return (
        <button id={id} type={type} onClick={onClick} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    );
}

Button.propTypes = {
    version: PropTypes.oneOf(['primary', 'hero', 'hipster']),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    id: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};

export default Button;
