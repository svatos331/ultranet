import React, { FC } from 'react'
import * as ST from './styled'

interface Props {
  src: string
  title: string
}

const Image: FC<Props> = ({ src, title }) => (
  <ST.Image title={title} src={src} />
)

export default Image
