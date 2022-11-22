import styled from 'styled-components'

export const CustomTable = styled.div`
  position: relative;
  display: flex;
  border-left: 1px solid rgba(38, 40, 66, 0.12);
  border-top: 1px solid rgba(38, 40, 66, 0.12);
  border-bottom: 1px solid rgba(38, 40, 66, 0.12);
  border-radius: 10px 0px 0px 10px;
  flex-direction: row;
  flex: 1;

  .shadow {
    position: absolute;
    right: 0;
    height: 100%;
    width: 30px;
    box-shadow: -151px -2px 27px -161px rgba(0, 0, 0, 0.52) inset;
    -webkit-box-shadow: -151px -2px 27px -161px rgba(0, 0, 0, 0.52) inset;
    -moz-box-shadow: -151px -2px 27px -161px rgba(0, 0, 0, 0.52) inset;
  }
`
