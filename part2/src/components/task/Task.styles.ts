import styled from 'styled-components'

type Task = {
  isOpened: boolean
  level: number
  clickable: boolean
}

type Icon = {
  color: string
  background: string
}

export const CustomTask = styled.div<Task>`
  display: flex;
  min-width: fit-content;
  white-space: nowrap;
  padding-right: 55px;
  align-items: center;
  height: 40px;
  padding-left: ${(props) => `${23 * (props.level + 1)}px`};
  border-bottom: 1px solid rgba(38, 40, 66, 0.12);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #262842;
  gap: 5px;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'auto')};
  display: ${(props) => props.isOpened && 'none'};

  .open_button {
    background-color: transparent;
    border: none;
  }

  .sub_length_number {
    font-style: italic;
    font-weight: 100;
    font-size: 12px;
    line-height: 16px;
    color: #8b8c9e;
    margin-right: 3px;
  }
`

export const CustomIcon = styled.div<Icon>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 4px;

  .icon {
    height: 11px;
    width: auto;
  }
`
