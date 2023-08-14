import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;

  display: flex;
  justify-content: space-between;
  

  .logo {
    padding: 8% ;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
          TRIPMEMORIES
       
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
