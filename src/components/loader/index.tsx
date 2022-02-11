import React, { FC } from 'react'
import * as ST from './styled'
import { EventType } from 'types/components/eventType'

interface Props {
  delay: number
}

export const LinearLoader: FC<Props> = ({ delay }) => (
  <ST.WrapperLinear style={{ animationDelay: `${delay}s` }} />
)
export const CircleLoader: FC<Props> = ({ delay }) => (
  <ST.WrapperCircle style={{ animationDelay: `${delay}s` }} />
)
export const ImageLoader: FC<Props> = ({ delay }) => (
  <ST.WrapperImage style={{ animationDelay: `${delay}s` }} />
)
