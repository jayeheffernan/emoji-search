import React from 'react';
import PropTypes from 'prop-types';

const checkForEnter = ({ key }) => key === 'Enter'

const SearchInput = ({ value, onChange, onSubmit }) => (
  <div className="row mb-4">
    <input
      placeholder="search for emojis..."
      type="text"
      className="form-control"
      value={value}
      onChange={ev => onChange(ev.target.value)}
      onKeyPress={ev => checkForEnter(ev) && onSubmit()}
    />
  </div>
);

SearchInput.propTypes = {
  value: PropTypes.string,
  onChanged: PropTypes.func,
  onSubmit: PropTypes.func,
};

SearchInput.defaultProps = {
  value: '',
  onChanged: () => '',
  onSubmit: () => '',
};

export default SearchInput;
