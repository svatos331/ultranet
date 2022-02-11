import styled from 'styled-components'
import { COLORS } from 'constants/colors'

export const Wrapper = styled.div`
  background-color: ${COLORS.DARKBLUE};
  border-radius: 4px;
  padding: 10px;
  max-width: 310px;
  position: relative;
  & img {
    max-width: 100%;
    display: block;
  }
`
export const WrapperImage = styled.div`
  width: 290px;
  margin-bottom: 12px;
  height: 193.33px;
  position: relative;
  box-shadow: inset -2px -2px 6px rgb(255 255 255 / 5%),
    inset 2px 2px 6px rgb(0 0 0 / 50%);
`

export const Title = styled.h2`
  color: #c3c5d5;
  margin-bottom: 5px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  max-width: 230px;
  padding: 0 14px;
  height: 18.39px;
`
export const SubTitle = styled.p`
  color: #5c5e6e;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  max-width: 190px;
  padding: 0 14px;

  height: 14.94px;
`

export const WrapperDate = styled.div`
  position: absolute;
  left: 30px;
  top: 25px;
  z-index: 99;
`

export const Month = styled.p`
  background-color: #1687fa;
  padding: 7px 20px;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
  color: #fff;
  text-align: center;
  border-radius: 4px 4px 0 0;
  width: 67.48px;
  height: 32.39px;
`

export const Day = styled.p`
  backdrop-filter: blur(4px);
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 6px 0;
  text-align: center;
  width: 67.47px;
  height: 37.3px;
`
