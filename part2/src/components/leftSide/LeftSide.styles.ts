import styled from 'styled-components'

export const CustomLeftSide = styled.div`
  flex: 4;
  border-right: 1px solid rgba(38, 40, 66, 0.12);
  width: fit-content;

  .leftside_header {
    height: 48px;
    background-color: #f7f8fc;
    padding: 15px 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #6d6e85;
    border-bottom: 1px solid rgba(38, 40, 66, 0.12);
  }
  .add_bar {
    display: flex;
    align-items: center;
    height: 40px;
    padding-left: 40px;
    border-bottom: 1px solid rgba(38, 40, 66, 0.12);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #262842;
    cursor: pointer;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 16px;
      width: 16px;
      font-size: 12px;
      color: #2db77b;
      background-color: #eef9f4;
      border-radius: 4px;
      margin-right: 8px;
    }
  }
`
