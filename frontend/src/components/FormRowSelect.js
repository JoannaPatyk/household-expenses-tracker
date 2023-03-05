import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const FormRowSelect = ({ list, onChange, theme }) => {
    const options = list.map((item) => {
        return {
            value: `${item.name}`,
            label: `${item.name}`
        };
    });

    const light_yellow = '#fff0d1';
    const dark_yellow = '#ffcc66';
    const dark_purple = '#231c30';

    const isDark = theme === 'dark';

    const styles = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            padding: '15px',
            fontWeight: state.isSelected ? 'bold' : 'normal',
            fontSize: state.selectProps.myFontSize,
            borderBottom: isDark ? `1px dotted ${light_yellow}` : `1px dotted ${dark_purple}`,
            color: isDark ? light_yellow : dark_purple,
            backgroundColor: isDark ? dark_purple : '#fff',
            cursor: 'pointer'
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: isDark ? dark_yellow : dark_purple,
            padding: '5px',
            width: '100%',
            border: 0,
            borderRadius: '20px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.7), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }),

        singleValue: (defaultStyles) => ({
            ...defaultStyles,
            fontWeight: 'bold',
            color: isDark ? dark_purple : dark_yellow
        }),

        placeholder: (defaultStyles) => ({
            ...defaultStyles,
            color: isDark ? dark_purple : dark_yellow
        }),

        dropdownIndicator: (defaultStyles) => ({
            ...defaultStyles,
            color: isDark ? dark_purple : dark_yellow
        }),

        indicatorSeparator: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: isDark ? dark_purple : dark_yellow
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
    children: PropTypes.string,
    theme: PropTypes.string
};

export default FormRowSelect;
