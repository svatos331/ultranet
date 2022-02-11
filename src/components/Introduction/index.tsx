import React, { FC } from 'react'
import * as ST from './styled'
import * as TITLE from '../Titles/styled'
import { ReactComponent as BagSwg } from 'assets/test/bag.svg'
import { ReactComponent as HomeSwg } from 'assets/test/home.svg'
import { ReactComponent as BallSwg } from 'assets/test/ball.svg'
import { IntroductionType } from 'types/components/introductionType'
import Button from 'components/Introduction/Button'
import { CircleLoader, LinearLoader } from 'components/loader'

interface Props {
  introductionData: IntroductionType[] | null
}

const Introduction: FC<Props> = ({ introductionData }) => {
  return (
    <ST.Wrapper>
      <ST.WrapperTitle>
        <TITLE.H2>Introduction</TITLE.H2>
        <Button
          handleClick={() => {
            console.log('кликнули по кнопке')
          }}
        />
      </ST.WrapperTitle>
      <ST.ListItems>
        <ST.Item>
          {introductionData ? <BagSwg /> : <CircleLoader delay={0.1} />}
          {introductionData ? (
            <ST.Name>
              {introductionData[0].name}{' '}
              <ST.Value>{introductionData[0].value}</ST.Value>
            </ST.Name>
          ) : (
            <LinearLoader delay={0.1} />
          )}
        </ST.Item>

        <ST.Item>
          {introductionData ? <HomeSwg /> : <CircleLoader delay={0.3} />}
          {introductionData ? (
            <ST.Name>
              {introductionData[1].name}{' '}
              <ST.Value>{introductionData[1].value}</ST.Value>
            </ST.Name>
          ) : (
            <LinearLoader delay={0.3} />
          )}
        </ST.Item>
        <ST.Item>
          {introductionData ? <BallSwg /> : <CircleLoader delay={0.6} />}
          {introductionData ? (
            <ST.Name>
              {introductionData[2].name}{' '}
              <ST.Value>{introductionData[2].value}</ST.Value>
            </ST.Name>
          ) : (
            <LinearLoader delay={0.6} />
          )}
        </ST.Item>
      </ST.ListItems>
    </ST.Wrapper>
  )
}

export default Introduction
