import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const FormRowSelect = ({ list, onChange }) => {
    const options = list.map((item) => {
        return {
            value: `${item.name}`,
            label: `${item.name}`
        };
    });

    const styles = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            padding: '15px',
            fontWeight: state.isSelected ? 'bold' : 'normal',
            fontSize: state.selectProps.myFontSize,
            borderBottom: localStorage.getItem('theme') === 'dark' ? '1px dotted #efdac5' : '1px dotted #201a2b',
            color: localStorage.getItem('theme') === 'dark' ? '#efdac5' : '#282d40',
            backgroundColor: localStorage.getItem('theme') === 'dark' ? '#282d40' : '#fff',
            cursor: 'pointer'
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: localStorage.getItem('theme') === 'dark' ? '#dfb48b' : '#282d40',
            padding: '5px',
            width: '100%',
            border: 0,
            borderRadius: '20px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.7), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }),

        singleValue: (defaultStyles) => ({
            ...defaultStyles,
            fontWeight: 'bold',
            color: localStorage.getItem('theme') === 'dark' ? '#282d40' : '#dfb48b'
        }),

        placeholder: (defaultStyles) => ({
            ...defaultStyles,
            color: localStorage.getItem('theme') === 'dark' ? '#282d40' : '#dfb48b'
        }),

        dropdownIndicator: (defaultStyles) => ({
            ...defaultStyles,
            color: localStorage.getItem('theme') === 'dark' ? '#282d40' : '#dfb48b'
        }),

        indicatorSeparator: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: localStorage.getItem('theme') === 'dark' ? '#282d40' : '#dfb48b'
        }),

        menuList: (defaultStyles) => ({
            ...defaultStyles,
            padding: 0
        })
    };

    return (
        <div className="select-container">
            <Select
                myFontSize="16px"
                styles={styles}
                onChange={onChange}
                options={options}
                placeholder="wybierz kategorię..."
            />
        </div>
    );
};

FormRowSelect.propTypes = {
    onChange: PropTypes.func,
    list: PropTypes.array,
    children: PropTypes.string
};

export default FormRowSelect;
