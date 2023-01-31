import React from 'react';
import PropTypes from 'prop-types';

const FormRowSelect = ({ id, name, list, onChange }) => {
    return (
        <>
            <label htmlFor={name}>{name}</label>

            <select id={id} name={name} onChange={onChange} className="form-select">
                {list.map(({ id, name }) => {
                    return (
                        <option key={id} value={name}>
                            {name}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

FormRowSelect.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    list: PropTypes.array
};

export default FormRowSelect;
