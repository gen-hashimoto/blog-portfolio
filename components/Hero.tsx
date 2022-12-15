import Image from 'next/legacy/image'
import styled from 'styled-components'
import ball from 'images/ball.png'
import { layout } from 'styles/style-utils'

type HeroProps = {
  title: string
  subtitle: string
  imageOn?: boolean
}

const StyledHeroText = styled.div`
  padding-top: calc(var(--display) * 0.5);
  padding-bottom: calc(var(--display) * 0.7);
`

const StyledHeroTitle = styled.h1`
  font-size: calc(var(--display) * 0.7);
  font-weight: 900;
  /* letter-spacing: 0.em; */
`

const StyledHeroSubtitle = styled.h2`
  font-size: var(--heading1);
  font-weight: 900;
`
const StyledFlexContainer = styled.div`
  ${layout.sideBySide}
`

const StyledImg = styled.figure`
  width: 40%;
  @media (min-width: 768px) {
    width: 20%;
  }
`

const Hero = ({ title, subtitle, imageOn = false }: HeroProps): JSX.Element => {
  return (
    <StyledFlexContainer>
      <StyledHeroText>
        <StyledHeroTitle>{title}</StyledHeroTitle>
        <StyledHeroSubtitle>{subtitle}</StyledHeroSubtitle>
      </StyledHeroText>
      {imageOn && (
        <StyledImg>
          <Image
            src={ball}
            alt="img"
            layout="responsive"
            sizes="(min-width: 1152px) 576px,(min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </StyledImg>
      )}
    </StyledFlexContainer>
  )
}

export default Hero
