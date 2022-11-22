import styled from 'styled-components'

type LeftSide = {
  width: number
}

export const CustomLeftSide = styled.div<LeftSide>`
  /* flex: 4; */
  position: relative;
  border-right: 1px solid rgba(38, 40, 66, 0.12);
  /* max-width: fit-content; */
  min-width: 170px;
  max-width: 80vw;
  width: ${(props) => `${props.width}px`};

  .resize {
    position: absolute;
    right: 0px;
    height: 100%;
    border: none;
    width: 5px;
    background-color: rgba(38, 40, 66, 0.05);
    cursor: col-resize;
    transition: 0.3s;

    &:active {
      width: 5px;
      background-color: rgb(52, 127, 235);
    }

    &:hover {
      width: 5px;
      background-color: rgb(52, 127, 235);
    }
  }

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
    overflow: hidden;
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
    overflow: hidden;

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
  .tasks {
    overflow: hidden;
  }
`
