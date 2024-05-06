import React from 'react';
import styled from 'styled-components';
import Form from './components/form/index';

const Image = styled.img`
  width: 350px;
  object-fit: cover;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

function App() {
  return (
    <GridContainer>
      <Image src="public\mapBrazil.png" alt="" />
      <Form />
    </GridContainer>
  );
}

export default App;
