import styled from 'styled-components'

export const StyledTicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 71px auto;
  width: 980px;
`

export const StyledTicket = styled.div`
  width: 980px;
  height: ${(props) => props.height};
  box-shadow: 0px 0px 14px rgba(112, 121, 153, 0.3);
  border-radius: 15px;
  display: flex;
  font-family: 'Roboto';
  .left-side {
    display: flex;
    flex-direction: column;
    width: 132px;
    height: 200px;

    .refundable {
      width: 132px;
      height: 26px;
      background: #8ba5d8;
      border-radius: 15px 0px;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        color: white;
        width: 85px;
        height: 14px;
        left: 23px;
        top: 6px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
      }
    }

    .aircompany {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;
      gap: 8px;
      .icon {
        width: 39px;
        height: 39px;
        object-position: left top;
        object-fit: cover;
      }
      span {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #5c5c5c;
      }
    }
  }

  .center-side {
    width: 653px;
    height: 140px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .flight-details {
      display: flex;
      gap: 20px;

      .location {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 110px;

        .time {
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 28px;
          text-align: center;
          color: #232323;
          margin-bottom: 8px;
        }

        .location-city {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #5c5c5c;
        }

        .location-time {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #5c5c5c;
        }
      }

      .flight {
        width: 270px;
        padding-right: 30px;

        .aliases {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          span {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 140%;
            text-align: center;
            color: #b7bac1;
          }
        }

        .graph {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 5px;
          position: relative;
          .ellipse {
            width: 8px;
            height: 8px;
            border-radius: 100%;
            background: #c4c4c4;
          }

          .line {
            position: absolute;
            top: calc(50% - 2px / 2);
            left: 5px;
            height: 0px;
            width: 259px;
            border: 1px solid #c4c4c4;
          }
        }

        .in-flight-time {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 140%;
          text-align: center;
          color: #b7bac1;
        }
      }

      .baggage {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;

        .icon {
          color: #8ba5d8;
          width: 25px;
          height: 25px;
        }
      }
    }

    .options {
      display: flex;
      /* gap: 20px; */
      align-items: center;

      .option {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 107px;
        height: 34px;
        padding: 5px;
        margin-right: 10px;
        margin-left: 10px;
        border: 1px solid #b7bac1;
        border-radius: 10px;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 21px;
        color: #5c5c5c;
        cursor: pointer;
        span {
          margin-right: 3px;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 21px;
          color: #5c5c5c;
        }
      }

      .selected {
        padding: 9px;
        margin-right: 7px;
        margin-left: 7px;
        background-color: #dde3ee;
        border: none;
      }
    }
  }

  .right-side {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;
    border-left: 1px solid #dde3ee;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      text-align: center;
      color: #232323;
    }
  }

  .double {
    height: 400px;
  }

  .double-center-side {
    border-top: 1px dashed #5c87db;
  }

  .double-right-sige {
    height: 400px;
  }
`
