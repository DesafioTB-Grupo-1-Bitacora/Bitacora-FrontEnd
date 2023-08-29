import Styled from './styles'


import { useState } from 'react'

import Menu from './Menu'
import Burger from './Burger'

const Navbar = ({ className }) => {
	const [open, setOpen] = useState(false)

	return (
		<Styled.Navbar className={className}>
			<h1>TRIPMEMORIES</h1>
		
			<nav>
				<Burger isOpen={open} onToggle={() => setOpen(!open)} />
				<Menu isOpen={open} onClose={() => setOpen(false)} />
			</nav>
			<div>

			<Styled.LogLink to={`/login`}> Iniciar sesión</Styled.LogLink>
			<Styled.RegLink to={`/register`}> Registrarse</Styled.RegLink>
			
			</div>
		</Styled.Navbar>
	)
}

export default Navbar
