import Styled from './styles'

const MenuItem = ({ onClick, label, to }) => (
	<li>
		<Styled.MenuItem onClick={onClick} to={to}>
			{label}
		</Styled.MenuItem>
	</li>
)

const Menu = ({ isOpen, onClose }) => {
	return (
		<Styled.Menu open={isOpen}>
			<MenuItem onClick={onClose} label="Perfil" to="/profile" />
			<MenuItem onClick={onClose} label="Añadir Ficha" to="/newsheet" />
			<MenuItem onClick={onClose} label="Mis viajes" to="/travels" />
			<MenuItem onClick={onClose} label="Mapa" to="/map" />
			<MenuItem onClick={onClose} label="Login" to="/Login" />
			<MenuItem onClick={onClose} label="Registro" to="/Register" />
		</Styled.Menu>
	)
}

export default Menu
