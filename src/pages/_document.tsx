import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

type Props = null

class Document extends NextDocument<Props> {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
