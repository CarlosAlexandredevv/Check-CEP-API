import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  width: 250px;
  height: 300px;
  background-color: ${theme.colors.container};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  border-radius: 12px;
  box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 860px) {
    width: 250px;
    height: 250px;
  }
`;

export const ContainerCep = styled.div`
  display: flex;
  width: 250px;
  height: 300px;
  border: 15px solid ${theme.colors.container};
  background-color: ${theme.colors.white};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  border-radius: 12px;
  box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 860px) {
    display: flex;
    width: 250px;
    height: 270px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Label = styled.label`
  font-size: 32px;
  color: ${theme.colors.black};
  font-weight: bold;
`;

export const Input = styled.input`
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

export const Button = styled.button`
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

export const ButtonClean = styled.button`
  all: unset;
  padding: 14px 20px;
  margin-bottom: 16px;
  background-color: ${theme.colors.bg};
  color: ${theme.colors.white};
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 16px;

  &:hover {
    opacity: 85%;
  }
`;

export const UlList = styled.ul`
  margin-top: 12px;
  display: flex;
  list-style: none;
  flex-direction: column;
  margin-left: 20px;
  gap: 10px;
  li {
    font-size: 14px;
  }

  @media (max-width: 860px) {
    display: flex;
    margin-top: 20px;
    list-style: none;
    flex-direction: column;
    margin-left: 20px;
    gap: 5px;
  }
`;

export const SpanS = styled.span`
  color: ${theme.colors.bg};
  font-weight: bold;
`;
