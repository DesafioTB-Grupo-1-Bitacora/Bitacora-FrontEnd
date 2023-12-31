import { Link } from "wouter";
import styled from "styled-components";

const Navbar = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px 10px;
  background-color: var(--Blanco, #f5f5fa);
  color: ${({ theme }) => theme.colors.black};
`;
const LogLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-right: 16px;
  padding: 2px 2px;
  font-size: 13px;
  @media (min-width: 768px) {
  }
`;

const User = styled.p`
  text-decoration: none;
  color: inherit;
  margin-right: 16px;
  padding: 2px 2px;
  font-size: 13px;
  @media (min-width: 768px) {
  }
`;

const RegLink = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: var(--amarillo-primario, #f90);
  border-radius: 20px;
  padding: 12px 16px;
  margin-right: 39px;
  font-size: 13px;
  @media (min-width: 768px) {
    padding: 12px 16px;
  }
`;

const Logout = styled.p`
  text-decoration: none;
  color: black;
  background-color: red;
  border-radius: 20px;
  padding: 12px 16px;
  margin-right: 39px;
  font-size: 13px;
  @media (min-width: 768px) {
    padding: 12px 16px;
  }
`;

const BurgerFloor = styled.div`
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
`;

const Burger = styled.div`
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;

  display: none;

  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  ${BurgerFloor} {
    background-color: ${({ open }) => (open ? "#000000" : "#333")};

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const MenuItem = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 18px 0px;
  font-size: 13px;
`;

const Menu = styled.ul`
  display: flex;
  gap: 10px;

  text-align: center;

  @media ${({ theme }) => theme.device.mobile} {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;

    position: fixed;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 3.5rem 0;

    flex-direction: column;
    gap: 1rem;
    background-color: #fff;

    ${MenuItem} {
      display: block;
      font-size: 26px;
      z-index: 1000;
    }
  }
`;
const Img = styled.img`
  width: 40px;
  height: 49px;

  @media (min-width: 768px) {
    content: url("/assets/Logo.png");
    width: 252px;
    height: 53px;
  }
`;

export default {
  Navbar,
  Burger,
  BurgerFloor,
  Menu,
  MenuItem,
  LogLink,
  User,
  RegLink,
  Logout,
  Img,
};
