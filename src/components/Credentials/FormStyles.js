import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
`;

export const Label = styled.label`
  color: #2d5089;
  font-weight: 600;
`;

export const InputSt = styled.input`
  display: block;
  width: 400px;
  margin: 0 auto;
  padding: 10px;

  font-size: 16px;
  border: 2px solid rgb(102, 99, 99);
  border-radius: 15px;
  outline: none;
  transition: box-shadow 250ms cubic-bezier(0.165, 0.84, 0.44, 1),
    border 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:focus {
    box-shadow: 0px 0px 3px 2px #925c63;
    border-color: #925c63;
  }
`;

export const BtnSt = styled.button`
  display: block;
  padding: 10px 10px;
  background-color: #ccdaf0;
  font-size: 16px;
  font-weight: 700;
  font-style: italic;
  border: none;
  border-radius: 15px;
  text-transform: capitalize;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.165, 0.84, 0.44, 1),
    background 250ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background-color: #4988ed;
    transform: scale(1.1);
  }
`;