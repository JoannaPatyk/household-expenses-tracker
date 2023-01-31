import React from 'react';
import PropTypes from 'prop-types';

function FormRow({ type, name, value, onChange, placeholder }) {
    return (
        <>
            <label htmlFor={name}>{name}</label>
            <input
                type={type}
                value={value}
                name={name}
                className="form-input"
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    );
}

FormRow.propTypes = {
    type: PropTypes.string,
    value: PropTypes.any,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

export default FormRow;
