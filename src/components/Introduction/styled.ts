import styled from 'styled-components'
import { COLORS } from 'constants/colors'

export const Wrapper = styled.div`
  background-color: ${COLORS.DARKBLUE};
  border-radius: 4px;
  padding: 20px;
  max-width: 310px;
`

export const ListItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`

export const Item = styled.li`
  color: ${COLORS.WHITEGREY};
  display: flex;
  font-size: 15px;
  align-items: center;
  width: 100%;
  height: 18.39px;
  gap: 10px;
  & svg {
    width: 16px;
    height: 16px;
  }
  & div:first-child {
    max-width: 16px;
    max-height: 16px;
  }
`
export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 0;
`

export const Value = styled.a`
  color: ${COLORS.BLUE};
`

export const Name = styled.p``
