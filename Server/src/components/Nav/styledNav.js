import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background-color: blue;
  color: green;
  font-weight: 700;
  border: 2px green solid;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  padding: 0.5rem;
  margin:  1rem;
  &:hover {
    filter: brightness(1.5);
    transform: scale(1.2);
  }
`;


export const ButtonCont = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  justify-content: center;
  padding-top: 1rem;
`;
