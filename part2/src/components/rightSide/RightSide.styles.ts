import styled from 'styled-components'

export const CustomRightSide = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 10;
  overflow: auto;

  .weeks {
    display: flex;
    flex-direction: column;

    .week {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 154px;
      height: 24px;
      border-right: 1px solid rgba(38, 40, 66, 0.12);
      border-bottom: 1px solid rgba(38, 40, 66, 0.12);
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      background-color: #f7f8fc;
      color: #262842;
    }

    .days {
      display: flex;

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
        background-color: #f7f8fc;

        width: 22px;
        height: 24px;
        border-right: 1px solid rgba(38, 40, 66, 0.12);
        border-bottom: 1px solid rgba(38, 40, 66, 0.12);

        &:nth-last-child(-n + 2) {
          color: #a9a9b8;
        }
      }

      .highlight_day {
        background-color: rgba(38, 40, 66, 0.12);
        border: 1px solid rgba(38, 40, 66, 0.12);
      }
    }

    .columns {
      display: flex;
      height: calc(100vh - 150px);

      .column {
        width: 22px;
        border-right: 1px solid rgba(38, 40, 66, 0.12);
      }

      .highlight_column {
        background-color: rgba(38, 40, 66, 0.12);
        border: none;
      }
    }
  }

  .chart {
    position: absolute;
    top: 88px;
  }
`
