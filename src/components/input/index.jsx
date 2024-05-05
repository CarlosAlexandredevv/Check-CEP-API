import { InputStyle } from './style';
import React from 'react';

export function Input() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    const cleanedValue = newValue.replace(/[^\d]/g, '');
    setValue(cleanedValue);
  };

  return (
    <InputStyle
      type="text"
      value={value}
      onChange={handleChange}
      maxLength="8"
      id="cep"
      placeholder="00000000"
    />
  );
}

export default Input;
