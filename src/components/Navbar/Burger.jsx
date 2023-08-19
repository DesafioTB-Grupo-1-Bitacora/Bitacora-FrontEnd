import Styled from './styles'

const Burger = ({ isOpen, onToggle }) => {
	return (
		<Styled.Burger open={isOpen} onClick={onToggle}>
			<Styled.BurgerFloor />
			<Styled.BurgerFloor />
			<Styled.BurgerFloor />
		</Styled.Burger>
	)
}

export default Burger
