import { styled } from 'styled-components'
import OverviewCard from '../../components/OverviewCard'

const Overview = () => {
  return (
    <OverviewStyled>
      <OverviewCard />
    </OverviewStyled>
  )
}

export default Overview

const OverviewStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`
