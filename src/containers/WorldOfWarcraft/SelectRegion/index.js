import React from 'react';
import PropTypes from 'prop-types';
import SelectOption from '@app-components/SelectOption';
import { regions } from '@app-utils/constantValues';

const SelectRegion = ({
  options,
  onChange,
  style,
  defaultValue,
  ...otherProps
}) => {
  return (
    <SelectOption
      options={options}
      onChange={onChange}
      style={{ minWidth: '250px' }}
      defaultValue={'eu'}
      {...otherProps}
    />
  );
};

SelectRegion.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultValue: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  style: PropTypes.object,
};

SelectRegion.defaultProps = {
  onChange: () => {},
  options: Object.values(regions).map(({ value, name }) => ({ value, name })),
  defaultValue: {},
  style: {},
};

export default SelectRegion;
