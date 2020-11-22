import * as React from 'react'
import { Menu } from 'antd'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'

const Layout = (props) => {
  const { title, children, menu } = props
  const siteTitle = 'INORAN'
  const defaultMenu = 'blog'

  return (
    <div>
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Title>
          <Link href="/">
            <a>{siteTitle}</a>
          </Link>
        </Title>
        <Menu
          style={{ textAlign: 'center' }}
          mode="horizontal"
          defaultSelectedKeys={[menu ? menu : defaultMenu]}
        >
          <Menu.Item key="blog">
            <Link href="/blog">BLOG</Link>
          </Menu.Item>
          <Menu.Item key="tech">
            <Link href="/tech">TECH</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link href="/about">ABOUT</Link>
          </Menu.Item>
        </Menu>
      </header>
      <main>
        <div>{children}</div>
      </main>
      <StickBottom>
        <footer>&copy; {siteTitle}</footer>
      </StickBottom>
    </div>
  )
}
export default Layout

const Title = styled.h1`
  margin: 10px;
  text-align: center;
`

const StickBottom = styled.div`
  position: absolute;
  bottom: 0;
`
