import { Container } from './style';
import theme from '../../styles/theme';
import Input from '../input/index';
import Button from '../button/index';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 32px;
  color: ${theme.colors.black};
  font-weight: bold;
`;

export function Form() {
  return (
    <Container>
      <Label htmlFor="cep">Consultar CEP</Label>
      <Input />
      <Button />
    </Container>
  );
}

export default Form;
