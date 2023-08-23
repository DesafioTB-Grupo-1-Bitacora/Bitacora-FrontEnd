import Styled from './styles'

import { useState } from 'react'

import Menu from './Menu'
import Burger from './Burger'

const Navbar = ({ className }) => {
	const [open, setOpen] = useState(false)

	return (
		<Styled.Navbar className={className}>
			<nav>
			<h1>LOGO</h1>
				<Burger isOpen={open} onToggle={() => setOpen(!open)} />
				<Menu isOpen={open} onClose={() => setOpen(false)} />
			</nav>
		</Styled.Navbar>
	)
}

export default Navbar
