import styled from 'styled-components';
import theme from '../../styles/theme';

export const CepContainer = styled.div`
  display: flex;
  width: 250px;
  height: 250px;
  background-color: ${theme.colors.container};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  border-radius: 12px;
  box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
`;
