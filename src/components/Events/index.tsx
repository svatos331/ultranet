import React, { FC } from 'react'
import * as ST from './styled'
import { EventType } from 'types/components/eventType'
import { ImageLoader, LinearLoader } from 'components/loader'
import Image from 'components/Image'

interface Props {
  eventsData: EventType[] | null
}

const Events: FC<Props> = ({ eventsData }) => {
  return (
    <ST.Wrapper>
      <ST.WrapperImage>
        {eventsData ? (
          <Image
            title={'Картинка евента'}
            src={
              'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80'
            }
          />
        ) : (
          <ImageLoader delay={0.3} />
        )}
      </ST.WrapperImage>
      <ST.Title>
        {eventsData ? 'Winter Wonderland' : <LinearLoader delay={0.9} />}
      </ST.Title>

      <ST.SubTitle>
        {eventsData ? '01st Jan, 2019 07:00AM' : <LinearLoader delay={0} />}
      </ST.SubTitle>

      <ST.WrapperDate>
        <ST.Month>{eventsData ? 'Jan' : ''}</ST.Month>
        <ST.Day>{eventsData ? '01' : ''}</ST.Day>
      </ST.WrapperDate>
    </ST.Wrapper>
  )
}

export default Events
