import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

type Props = null

class Document extends NextDocument<Props> {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Noto+Sans+JP:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
