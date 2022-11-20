import styled from 'styled-components'

export const StyledFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  width: 100%;

  .label {
    color: white;
    height: 13px;
    font-size: 11px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
  .field {
    padding: 12px;
    min-height: 16px;
    border: none;
    width: 184px;
    border-radius: 10px;
    background-color: white;
    outline: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    font-style: normal;
    color: #5c5c5c;
    font-family: 'Roboto', sans-serif;
    ::placeholder {
      color: #b7bac1;
    }
  }
  .date {
    padding-left: 41px;
    width: 155px;
  }

  .icon {
    height: 16px;
    position: absolute;
    width: 16px;
    top: 113px;
    color: #5c5c5c;
    padding: 0 12px;
  }

  .focus {
    color: #5c87db;
  }
`

export const StyledError = styled.div`
  font-size: 11px;
  padding: 3px;
  color: lightcoral;
  font-family: 'Roboto', sans-serif;
`
