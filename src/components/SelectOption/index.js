import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';

const SelectOption = ({
  options,
  onChange,
  style,
  defaultValue,
}) => {
  const { Option } = Select;
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    onChange(selectedValue);
  }, [selectedValue]);

  return (
    <Select defaultValue={defaultValue} style={{ ...style }} onChange={setSelectedValue}>
      {options.map((value, index) => {
        return <Option key={uniqueId()} value={value.value}>{value.name}</Option>
      })}
    </Select>
  )
};

SelectOption.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultValue: PropTypes.string,
  style: PropTypes.object,
};

SelectOption.defaultProps = {
  onChange: () => {},
  options: [],
  defaultValue: '',
  style: {},
};
export default SelectOption;
