import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`position: absolute;
                            top: 25px;
                            right: 0;
                            margin-right:5px;`

const NavLink = styled.a`padding: 10px;
                        color: black;
                        text-decoration: none;`

const nav = (
  <StyledNav>
    <NavLink href="/">home</NavLink>
    <NavLink href="/about">about</NavLink>
    <NavLink href="/contact">contact</NavLink>
  </StyledNav>
)

ReactDOM.render(nav, document.getElementById('nav'))

const header = <h2>BOOTCAMP Batch 8 : Experiment with REACTS.JS</h2>
ReactDOM.render(header, document.getElementById('header'))

const element = <h1>This is React</h1>
ReactDOM.render(element, document.getElementById('root'))