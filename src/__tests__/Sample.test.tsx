import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import Index from '../pages/index'

afterEach(cleanup)

describe('Index page', (): void => {
  // "Next.js!" というテキストのリンク先が Next.js のサイトであることをテスト
  it('link to blog', (): void => {
    const { getByText } = render(<Index />)
    expect(getByText('BLOG').getAttribute('href')).toBe('/blog')
  })
  it('link to tech', (): void => {
    const { getByText } = render(<Index />)
    expect(getByText('TECH').getAttribute('href')).toBe('/tech')
  })
  it('link to about', (): void => {
    const { getByText } = render(<Index />)
    expect(getByText('ABOUT').getAttribute('href')).toBe('/about')
  })
  // TODO を書ける
  // it.todo('Index TODO')
})
