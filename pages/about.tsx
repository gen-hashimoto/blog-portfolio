import Image from 'next/legacy/image'
import styled from 'styled-components'
import Accordion from 'components/Accordion'
import Contact from 'components/Contact'
import Container from 'components/Container'
import Hero from 'components/Hero'
import Meta from 'components/Meta'
import PostBody from 'components/PostBody'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from 'components/TwoColumn'
import about from 'images/about.png'

const StyledTopDiv = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 32px;
  align-items: center;
  padding: 16px;

  @media (min-width: 768px) {
    gap: 64px;
    padding: 16px;
  }
`

const StyledTopImg = styled.figure`
  width: 100%;
  max-width: 200px;
  min-width: 120px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: var(--box-shadow-hover);

  @media (min-width: 768px) {
    width: 200px;
  }
`

const StyledTopText = styled.p`
  font-size: var(--heading3);
`

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`

const StyledHistory = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  list-style: none;

  & > li {
    list-style: none;
    color: var(--black);

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 15px;
      left: -20px;
    }

    &::before {
      width: 8px;
      height: 8px;
      background-color: var(--gray-25);
      border-radius: 50%;
      transform: translateX(-50%);
    }

    &::after {
      width: 1px;
      bottom: calc(var(--space-xs) * (-1) - 15px);
      background-color: var(--gray-25);
    }

    &:last-child {
      &::after {
        height: auto;
        bottom: 0;
        background: none;
        border-left: 1px dashed var(--gray-25);
      }
    }
  }
`

const StyledListItemHead = styled.p`
  font-size: var(--heading3);
  font-weight: bold;
`

const StyledListItemList = styled.ul`
  & > li {
    list-style: none;
    &::before {
      content: '-';
      position: absolute;
      left: -20px;
      top: 0;
      bottom: 0;
    }
  }
`

const StyledTagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const StyledTag = styled.p`
  display: flex;
  align-items: center;
  line-height: 1;
  font-size: 12px;
  background: var(--black);
  color: var(--white);
  font-weight: bold;
  padding: 0 8px;
  border-radius: 4px;
`

const About = () => {
  return (
    <Container>
      <Meta pageTitle="About" pageDesc="About me" />

      <Hero title="About" subtitle="{ ... me }" />
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <StyledTopDiv>
              <StyledTopImg>
                <Image
                  src={about}
                  alt="about me"
                  layout="responsive"
                  sizes="(min-width: 1152px) 576px, 50vw"
                  priority
                  placeholder="blur"
                />
              </StyledTopImg>
              <StyledTopText>
                Gen Hashimoto
                <br />
                橋本 元
              </StyledTopText>
            </StyledTopDiv>
            <Accordion heading="私について">
              <StyledAbout>
                <p>
                  私は現在、コーディング、CMSによるサイト構築、UI制作などをおこなっています。
                </p>
                <p>
                  ご依頼のニーズに応じて、より高度な開発においてもご期待に添えるよう日々情報収集、学習研鑽を進めています。
                </p>
                <p>
                  以前は建築業界で仕事をしていましたが、出会いを通じWebスキルという世界共通言語の可能性を感じたことが現在の活動のきっかけです。
                </p>
                <p>
                  活動の場はかわってもこれまでの経験を活かし、クライアントの声にしっかり耳を傾けながら開発をおこないます。
                </p>
                <p>一級建築士</p>
              </StyledAbout>
            </Accordion>
            <Accordion heading="経歴">
              <StyledHistory>
                <li>
                  <StyledListItemHead>2022-01 ~ 現在</StyledListItemHead>
                  <p>フリーランス / フルタイム業務委託契約</p>
                  <StyledListItemList>
                    <li>
                      <p>
                        金融サービスサイトのUI制作、レスポンシブデザイン考案
                      </p>
                    </li>
                  </StyledListItemList>
                </li>

                <li>
                  <StyledListItemHead>2021-04 ~ 2021-12</StyledListItemHead>
                  <p>フリーランス</p>
                  <StyledListItemList>
                    <li>
                      <p>LP コーディング</p>
                    </li>
                    <li>
                      <p>レストランサイト CMSサイト構築</p>
                    </li>
                    <li>
                      <p>不動産サービスサイト コーディング</p>
                    </li>
                    <li>
                      <p>コーポレートサイト CMSサイト構築</p>
                    </li>
                  </StyledListItemList>
                </li>
                <li>
                  <StyledListItemHead>~ 2021-03</StyledListItemHead>
                  <p>建築関連業務に従事</p>
                  <StyledListItemList>
                    <li>
                      <p>Webエンジニアの友人の教えのもと業務開始準備</p>
                    </li>
                  </StyledListItemList>
                </li>
                <li>
                  <StyledListItemHead>大学卒業</StyledListItemHead>
                  <p>工学部にて建築学を専攻</p>
                </li>
              </StyledHistory>
            </Accordion>
            <Accordion heading="開発環境">
              <StyledTagWrap>
                <StyledTag>HTML</StyledTag>
                <StyledTag>CSS/Sass</StyledTag>
                <StyledTag>JavaScript/TypeScript</StyledTag>
                <StyledTag>jQuery</StyledTag>
                <StyledTag>React/Next.js</StyledTag>
                <StyledTag>PHP</StyledTag>
                <StyledTag>Laravel</StyledTag>
                <StyledTag>Wordpress</StyledTag>
                <StyledTag>Figma</StyledTag>
              </StyledTagWrap>
            </Accordion>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}
export default About
