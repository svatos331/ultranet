import React, { FC } from 'react'
import * as ST from './styled'

interface Props {
  handleClick: () => void
}

const Button: FC<Props> = ({ handleClick }) => {
  return (
    <ST.Wrapper onClick={handleClick}>
      <ST.Points />
      <ST.Points />
      <ST.Points />
    </ST.Wrapper>
  )
}

export default Button
