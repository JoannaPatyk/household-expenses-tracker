import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import SelectStyles from '../assets/styles/SelectStyles';

const FormRowSelect = ({ theme, value, options, placeholder, onChange, onMenuOpen, noOptionsMessage }) => {
    return (
        <div className="select-container">
            <Select
                myFontSize="16px"
                onChange={onChange}
                onMenuOpen={onMenuOpen}
                noOptionsMessage={noOptionsMessage}
                options={options}
                placeholder={placeholder}
                styles={SelectStyles(theme)}
                value={value}
            />
        </div>
    );
};

FormRowSelect.propTypes = {
    onChange: PropTypes.func.isRequired,
    onMenuOpen: PropTypes.func,
    noOptionsMessage: PropTypes.func,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    theme: PropTypes.string,
    value: PropTypes.object
};

FormRowSelect.defaultProps = {
    theme: 'dark',
    value: undefined
};

export default FormRowSelect;
