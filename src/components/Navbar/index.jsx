import Styled from "./styles";
import { Link } from "wouter";
import { useState } from "react";
import { useAuth, useLogin } from "../../hooks"
import Menu from "./Menu";
import Burger from "./Burger";

const Navbar = ({ className }) => {
  const [open, setOpen] = useState(false);

  const { data: logged } = useLogin();

  const { logout } = useAuth();

  return (
    <Styled.Navbar className={className}>
      <div>
        <Link to={`/`}>
          <Styled.Img src="/assets/LogoMobile.png" alt="logo" />
        </Link>
      </div>
      <nav>
        <Burger isOpen={open} onToggle={() => setOpen(!open)} />
        <Menu isOpen={open} onClose={() => setOpen(false)} />
      </nav>
      <div>
        { logged?.success ?
          <>
            <Styled.User>{logged.data}</Styled.User>
            <Styled.Logout onClick={logout}>Cerrar sesión</Styled.Logout>
          </>
          :
          <>
            <Styled.LogLink to={`/login`}> Iniciar sesión</Styled.LogLink>
            <Styled.RegLink to={`/register`}> Registrarse</Styled.RegLink>)
          </> }
      </div>
    </Styled.Navbar>
  );
};

export default Navbar;
