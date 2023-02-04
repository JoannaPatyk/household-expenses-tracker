import React from 'react';
import PropTypes from 'prop-types';

const FormRowSelect = ({ id, name, firstOption, list, onChange }) => {
    return (
        <select id={id} name={name} defaultValue={name} onChange={onChange} className="form-select">
            {firstOption ? <option value="">--{firstOption}--</option> : null}
            {list.map(({ id, name }) => {
                return (
                    <option key={id} value={name}>
                        {name}
                    </option>
                );
            })}
        </select>
    );
};

FormRowSelect.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    list: PropTypes.array,
    firstOption: PropTypes.string
};

export default FormRowSelect;
