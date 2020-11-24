import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import Index from '../pages/index'

afterEach(cleanup)

describe('Index page', (): void => {
  // "Next.js!" というテキストのリンク先が Next.js のサイトであることをテスト
  // it('link to blog', (): void => {
  //   const { getByText } = render(<Index />)
  //   expect(getByText('Blog').getAttribute('href')).toBe('/blog')
  // })
  // it('link to about', (): void => {
  //   const { getByText } = render(<Index />)
  //   expect(getByText('About').getAttribute('href')).toBe('/about')
  // })
  // TODO を書ける
  it.todo('Index TODO')
})
