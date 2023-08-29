import styled from 'styled-components'

import { Navbar as DefaultNavbar } from '../../components'

const navbarHeight = '55px'

const Layout = styled.div`
	display: grid;
	grid-template-areas: 'navbar' 'content';
	grid-template-rows: ${navbarHeight} 1fr;
	grid-template-columns: 1fr;
	height: 100vh;

	& > * {
		width: 100%;
	}
`

const Navbar = styled(DefaultNavbar)`
	grid-area: navbar;
	position: fixed;
	height: ${navbarHeight};
	z-index: 20;
`

const PageContainer = styled.div`

	grid-area: content;
`

export default {
	Layout,
	Navbar,
	PageContainer,
}
