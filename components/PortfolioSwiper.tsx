import { Tooltip } from '@chakra-ui/react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import styled from 'styled-components'

// import required modules
import { Autoplay, Pagination } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import ConvertDate from 'components/ConvertDate'
import { postTag } from 'styles/style-utils'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import type { PostsProps } from 'types/blog'

const StyledPortfolioSwiper = styled.div`
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  overflow: hidden;

  & .swiper {
    width: 320px;
    overflow: visible;
    position: relative;
    padding: 16px;

    @media (min-width: 1024px) {
      width: 400px;
      padding: 32px;
    }
  }

  & .slide {
    transition: all 0.8s;
  }

  & .swiper-slide:not(.swiper-slide-visible) .slide {
    /* pointer-events: none; */
    opacity: 0.3;
  }

  & .swiper-pagination {
    position: relative;
    bottom: 0;
    margin-bottom: 16px;
  }

  & .swiper-pagination-bullet-active {
    background: var(--accent);
  }
`

const StyledEachPost = styled.article`
  display: flex;
  flex-direction: column;
  font-size: calc(var(--body) * 0.75);
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: all 0.8s;

  @media (min-width: 1024px) {
    &:hover {
      transform: translateY(-16px);
      box-shadow: var(--box-shadow-hover);
    }
  }
`

const StyledFigure = styled.figure`
  aspect-ratio: 16/9;
`

const StyledTag = styled.div`
  ${postTag}
`

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--space-xs) * 0.25);
  padding: calc(var(--space-xs) * 0.5);
`

const StyledText = styled.p`
  display: flex;
  align-items: center;
  gap: calc(var(--space-xs) * 0.5);
`

const StyledTitle = styled.span`
  font-weight: bold;
`

const PortfolioSwiper = ({ posts }: PostsProps) => {
  // console.log(posts.length)
  return (
    <StyledPortfolioSwiper>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={32}
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={2}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        watchSlidesProgress={true}
        pagination={{
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        }}
        className="topSwiper"
      >
        {posts.map(
          ({
            title,
            slug,
            description,
            eyecatch,
            customPublishedDate: published,
            customUpdatedDate: updated,
            soon,
          }) => {
            const currentTime = new Date().getTime()
            const publishedTime = new Date(Date.parse(published)).getTime()
            const updatedTime = new Date(Date.parse(updated)).getTime()

            const pastDaysPublished =
              (currentTime - publishedTime) / (1000 * 60 * 60 * 24)
            const pastDaysUpdated =
              (currentTime - updatedTime) / (1000 * 60 * 60 * 24)

            return (
              <SwiperSlide key={slug}>
                <Link href={`/blog/${slug}`} className="slide">
                  <StyledEachPost>
                    <StyledFigure>
                      <Image
                        src={eyecatch.url}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes="(min-width: 1152px) 576px, 50vw"
                        placeholder="blur"
                        blurDataURL={eyecatch.blurDataURL}
                      />
                      <StyledTag>
                        {published && pastDaysPublished <= 7 && (
                          <Tooltip hasArrow label="new" placement="top">
                            <span className="new"></span>
                          </Tooltip>
                        )}
                        {updated && pastDaysUpdated <= 7 && (
                          <Tooltip hasArrow label="updated" placement="top">
                            <span className="updated"></span>
                          </Tooltip>
                        )}
                        {soon && (
                          <Tooltip hasArrow label="coming soon" placement="top">
                            <span className="soon"></span>
                          </Tooltip>
                        )}
                      </StyledTag>
                    </StyledFigure>
                    <StyledBody>
                      <StyledText>
                        {published && <ConvertDate dateISO={published} />}
                        <StyledTitle>{title}</StyledTitle>
                      </StyledText>
                      <span className="description">{description}</span>
                    </StyledBody>
                  </StyledEachPost>
                </Link>
              </SwiperSlide>
            )
          },
        )}
      </Swiper>
      <div className="swiper-pagination"></div>
    </StyledPortfolioSwiper>
  )
}
export default PortfolioSwiper
