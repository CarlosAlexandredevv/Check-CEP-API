import styled from 'styled-components';
import theme from '../../styles/theme';

export const InputStyle = styled.input`
  padding: 14px 6px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  &:focus {
    outline: none;
    border: 1px solid ${theme.colors.white};
  }

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    text-align: center;
  }
`;
