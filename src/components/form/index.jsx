import React, { useState } from 'react';
import {
  Container,
  GridContainer,
  Label,
  Input,
  Button,
  ContainerCep,
  UlList,
  SpanS,
  ButtonClean,
} from './style';

export function Form() {
  const [value, setValue] = useState('');
  const [data, setData] = useState(null);
  const [showClearButton, setShowClearButton] = useState(false);

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
        setShowClearButton(true);
      });
  }

  function handleClean() {
    setData(null);
    setValue('');
    setShowClearButton(false);
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
            <li>
              <SpanS>CEP: </SpanS>
              {data.cep || 'Dado não encontrado'}.
            </li>
            <li>
              <SpanS>Logradouro: </SpanS>
              {data.logradouro || 'Dado não encontrado'}.
            </li>
            <li>
              <SpanS>Complemento: </SpanS>{' '}
              {data.complemento || 'Dado não encontrado'}.
            </li>
            <li>
              <SpanS>Bairro: </SpanS> {data.bairro || 'Dado não encontrado'}.
            </li>
            <li>
              <SpanS>Uf:</SpanS> {data.uf || 'Dado não encontrado'}.
            </li>
            <li>
              <SpanS>DDD: </SpanS>
              {data.ddd || 'Dado não encontrado'}.
            </li>
          </UlList>
        )}
        {showClearButton && (
          <ButtonClean onClick={handleClean}>Limpar</ButtonClean>
        )}
      </ContainerCep>
    </GridContainer>
  );
}

export default Form;
