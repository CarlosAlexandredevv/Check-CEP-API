import React from 'react';
import styled from 'styled-components';
import Form from './components/form/index';
import Cep from './components/cep';

const Image = styled.img`
  width: 350px;
  object-fit: cover;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  gap: 35px;
`;

function App() {
  return (
    <GridContainer>
      <Image src="public\mapBrazil.png" alt="" />
      <Form />
      <Cep />
    </GridContainer>
  );
}

export default App;
