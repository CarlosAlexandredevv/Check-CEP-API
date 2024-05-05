import styled from 'styled-components';
import theme from '../../styles/theme';

export const ButtonStyle = styled.button`
  all: unset;
  padding: 14px 20px;
  background-color: ${theme.colors.bg};
  color: ${theme.colors.white};
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 16px;
  transition: 0.3s;
  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.bg};
  }
`;
