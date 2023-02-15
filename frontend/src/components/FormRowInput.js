import React from 'react';
import PropTypes from 'prop-types';

function FormRow({ id, type, name, value, onChange, placeholder }) {
    return (
        <input
            id={id}
            type={type}
            value={value}
            name={name}
            className="form-input"
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

FormRow.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

export default FormRow;
