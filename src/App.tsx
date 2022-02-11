import React, { useState } from 'react'
import './App.css'
import Events from 'components/Events'
import Introduction from 'components/Introduction'
import { IntroductionType } from 'types/components/introductionType'
import { EventType } from 'types/components/eventType'
import { ImageLoader } from 'components/loader'

function App() {
  const [state, setState] = useState<IntroductionType[] | null>(null)
  const [state1, setState1] = useState<EventType[] | null>(null)

  const introductionData = [
    {
      name: 'Product Designer at',
      value: 'Bravebist',
    },
    {
      name: 'Live in',
      value: 'Hanoi, Vietnam',
    },
    {
      name: 'Player name',
      value: 'Quan Ha',
    },
  ]
  const eventData = [
    {
      name: 'Winter Wonderland',
      date: new Date('December 17, 1995 03:24:00'),
      image:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    },
    {
      name: 'Winter Wonderland 2',
      date: new Date('December 18, 1995 05:24:00'),
      image:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    },
    {
      name: 'Winter Wonderland 3',
      date: new Date('December 19, 1995 07:24:00'),
      image:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    },
  ]

  const test = new Promise(() => {
    setTimeout(() => {
      setState(introductionData)
    }, 3000)
  })
  const test1 = new Promise(() => {
    setTimeout(() => {
      setState1(eventData)
    }, 3000)
  })
  return (
    <>
      <Introduction introductionData={state} />
      <Events eventsData={state1} />
    </>
  )
}
export default App
