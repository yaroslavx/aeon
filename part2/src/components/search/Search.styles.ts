import styled from 'styled-components'

export const StyledSearch = styled.div`
  margin-top: 68px;
  display: flex;
  justify-content: center;
  .form-container {
    width: 962px;
    height: 186px;
    display: flex;
    flex-direction: column;
    background-color: white;
  }
  .fields-conteiner {
    display: flex;

    height: 100px;
    background-color: #5c87db;
    border-radius: 15px 15px 0 0;
    padding: 20px 30px 27px 30px;
    gap: 21px;
  }
  .buttons-conteiner {
    padding: 23px 29px;
    display: flex;
    justify-content: flex-end;
    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 0px 14px rgba(112, 121, 153, 0.3);
  }
`

export const StyledSubmitButton = styled.button`
  width: 158px;
  background-color: #5c87db;
  border-radius: 10px;
  height: 40px;
  color: white;
  border: none;
  font-size: 14px;
  font-weight: 400px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #3e67b7;
  }

  &:active {
    &:not([disabled]) {
      background-color: #5c87db;
      color: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 4px rgba(92, 135, 219, 0.15);
    }
  }

  :disabled {
    color: white;
    background-color: #b7bac1;
  }
`
