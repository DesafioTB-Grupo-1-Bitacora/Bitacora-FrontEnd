import Styled from './styles'

const Layout = ({ children }) => (
	<Styled.Layout>
		<Styled.Navbar />
		<Styled.PageContainer>{children}</Styled.PageContainer>
	</Styled.Layout>
)

export default Layout
