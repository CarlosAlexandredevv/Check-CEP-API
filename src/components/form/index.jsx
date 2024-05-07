import React, { useState } from 'react';
import {
  Container,
  GridContainer,
  Label,
  Input,
  Button,
  ContainerCep,
  UlList,
} from './style';

export function Form() {
  const [value, setValue] = useState('');
  const [data, setData] = useState(null);

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
      <ContainerCep>
        {data && (
          <UlList>
            <li>CEP: {data.cep || 'Dado não encontrado'}.</li>
            <li>Logradouro: {data.logradouro || 'Dado não encontrado'}.</li>
            <li>Complemento: {data.complemento || 'Dado não encontrado'}.</li>
            <li>Bairro: {data.bairro || 'Dado não encontrado'}.</li>
            <li>Uf: {data.uf || 'Dado não encontrado'}.</li>
            <li>DDD: {data.ddd || 'Dado não encontrado'}.</li>
          </UlList>
        )}
      </ContainerCep>
    </GridContainer>
  );
}

export default Form;
