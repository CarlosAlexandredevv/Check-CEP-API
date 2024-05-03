import { Container } from './style';
import theme from '../../styles/theme';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 24px;
  color: ${theme.colors.white};
  font-weight: bold;
`;

export function Form() {
  return (
    <Container>
      <Label htmlFor="cep">Consultar CEP</Label>
      <input id="cep" type="text" />
      <button>consultar</button>
    </Container>
  );
}

export default Form;
