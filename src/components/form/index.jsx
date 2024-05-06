import React, { useState } from 'react';
import { Container, GridContainer, Label, Input, Button } from './style';

export function Form() {
  const [value, setValue] = useState('');
  const [data, setData] = useState('');

  function handleChange(event) {
    const newValue = event.target.value;
    const cleanedValue = newValue.replace(/[^\d]/g, '');
    setValue(cleanedValue);
  }

  function handleClick() {
    const cep = value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((cepData) => {
        setData(cepData);
        console.log(cepData.bairro, cepData.logradouro);
      });
  }

  return (
    <GridContainer>
      <Container>
        <Label htmlFor="cep">Consultar CEP</Label>
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          maxLength={8}
          id="cep"
          placeholder="00000000"
        />
        <Button onClick={handleClick}>Consultar</Button>
      </Container>
      <Container></Container>
    </GridContainer>
  );
}

export default Form;
