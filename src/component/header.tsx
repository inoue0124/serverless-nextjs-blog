import { NextPage } from 'next'
import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Button } from 'antd'

const Header: NextPage = () => {
  return (
    <div>
      <Title>INORAN</Title>
      <Link href="/about">
        <Button type="primary">About</Button>
      </Link>
    </div>
  )
}

export default Header

const Title = styled.h1`
  color: red;
`
