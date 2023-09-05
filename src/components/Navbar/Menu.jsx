import Styled from "./styles";

const MenuItem = ({ onClick, label, to }) => (
  <li>
    <Styled.MenuItem onClick={onClick} to={to}>
      {label}
    </Styled.MenuItem>
  </li>
);

const Menu = ({ isOpen, onClose }) => {
  return (
    <Styled.Menu open={isOpen}>
      <MenuItem onClick={onClose} label="Perfil" to="/profile" />
      <MenuItem onClick={onClose} label="Añadir Memory" to="/newmemory" />
      <MenuItem onClick={onClose} label="Mis cuadernos" to="/" />
      <MenuItem onClick={onClose} label="Recordatorios" to="/" />
      <MenuItem onClick={onClose} label="Mi suscripción" to="/suscription" />
    </Styled.Menu>
  );
};

export default Menu;
