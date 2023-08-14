import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
 
  display: flex;
  flex-flow: row nowrap;
  z-index: 20;
  text-decoration: none;

  
  li {
    padding: 18px 10px;
    font-size: 16px;

  }
  a, a:hover, a:visited, a:active {
    color: inherit;
    text-decoration: none;
   }
  

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 10%;
    right: 0;
    height: 50vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #000000;
      text-align:center;
      font-size: 26px;
    
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="/profile">Perfil</a></li>
      <li><a href="/newsheet">Añadir Ficha</a></li>
      <li><a href="/travels">Mis viajes</a></li>
      
      <li><a href="/map">Mapa</a></li>
      <li><a href="Login">Login</a></li>
      <li><a href="Register">Registro</a></li>
    </Ul>
  )
}

export default RightNav
