import parse, { Element, HTMLReactParserOptions } from 'html-react-parser'
import Image from 'next/legacy/image'
import React from 'react'

type ConvertBodyProps = {
  contentHTML: string
}

/**
 * I got some TS issues, that's why I came up with `typedDomNode`.
 *
 * Related issues:
 * @see https://github.com/remarkablemark/html-react-parser/issues/221#issuecomment-771600574
 */

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    const typedDomNode = domNode as Element

    if (typedDomNode.attribs && typedDomNode.name === 'img') {
      const { src, alt, width, height } = typedDomNode.attribs
      return (
        <Image
          layout="responsive"
          src={src}
          width={Number(width)}
          height={Number(height)}
          alt={alt}
          sizes="(min-width:768px) 768px, 100vw"
        />
      )
    }

    return false
  },
}

const ConvertBody = ({ contentHTML }: ConvertBodyProps) => {
  const contentReact = parse(contentHTML, options)

  return <>{contentReact}</>
}

export default ConvertBody
