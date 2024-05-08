import React from 'react';
import styled from 'styled-components';
import Form from './components/form/index';

const Image = styled.img`
  width: 350px;
  object-fit: cover;

  @media (max-width: 859px) {
    width: 200px;
    margin-top: 80px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

function App() {
  return (
    <GridContainer>
      <Image src="mapBrazil.png" alt="Map Brazil" />
      <Form />
    </GridContainer>
  );
}

export default App;
