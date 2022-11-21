import styled from 'styled-components'

export const CustomRightSide = styled.div`
  flex: 10;

  .rightside_header {
    height: 48px;
    background-color: #f7f8fc;
    color: #6d6e85;
    border-bottom: 1px solid rgba(38, 40, 66, 0.12);
  }

  .weeks_bar {
    height: 24px;
    border-bottom: 1px solid rgba(38, 40, 66, 0.12);

    .week {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 148px;
      height: 24px;
      border-right: 1px solid rgba(38, 40, 66, 0.12);
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #262842;
    }
  }

  .day {
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #262842;
    width: 22px;
    height: 24px;
    border-right: 1px solid rgba(38, 40, 66, 0.12);
  }
`
