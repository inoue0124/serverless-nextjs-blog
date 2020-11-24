import ActiveLink from './ActiveLink'
import styled from 'styled-components'
import * as React from 'react'

const Nav = () => (
  <nav>
    <style jsx>{`
      .nav-link {
        text-decoration: none;
        color: grey;
      }
      .nav-link:hover {
        opacity: 0.5;
      }
      .active {
        color: #ef3e36;
      }
    `}</style>
    <ul className="nav">
      <InlineList>
        <ActiveLink activeClassName="active" href="/about">
          <a className="nav-link">About</a>
        </ActiveLink>
      </InlineList>
      <InlineList>
        <ActiveLink activeClassName="active" href="/work">
          <a className="nav-link">Work</a>
        </ActiveLink>
      </InlineList>
      <InlineList>
        <ActiveLink activeClassName="active" href="/blog">
          <a className="nav-link">Blog</a>
        </ActiveLink>
      </InlineList>
      <InlineList>
        <ActiveLink activeClassName="active" href="/contact">
          <a className="nav-link">Contact</a>
        </ActiveLink>
      </InlineList>
    </ul>
  </nav>
)

export default Nav

const InlineList = styled.li`
  display: inline-block;
  padding: 10px 20px;
`
