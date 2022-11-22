import styled from 'styled-components'

type Task = {
  isOpened: boolean
  level: number
  start?: number
}

type ChartBar = {
  border: string
  background: string
  width?: number
}

export const CustomChartTask = styled.div<Task>`
  display: flex;
  align-items: center;
  height: 40px;
  margin-left: ${(props) => `${props.start && 22 * props.start}px`};
  width: fit-content;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #262842;
  gap: 5px;
  cursor: pointer;
  display: ${(props) => props.isOpened && 'none'};
  white-space: nowrap;
`
export const ChartBar = styled.div<ChartBar>`
  border: 1px solid ${(props) => props.border};
  background-color: ${(props) => props.background};
  height: 24px;
  width: ${(props) => `${props.width && 22 * props.width}px`};
  border-radius: 4px;
  z-index: -1;
`
