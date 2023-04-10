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
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    placeholder: PropTypes.string,
    theme: PropTypes.string,
    value: PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })
};

FormRowSelect.defaultProps = {
    theme: 'dark',
    value: null
};

export default FormRowSelect;
