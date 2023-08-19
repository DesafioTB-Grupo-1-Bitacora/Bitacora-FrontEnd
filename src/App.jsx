import { Route, Switch } from 'wouter'

import Layout from './pages/Layout'
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import Map from './pages/MapPage'

import NewSheet from './pages/NewSheetPage'
import Profile from './pages/ProfilePage'
import Travels from './pages/TravelsPage'

import ErrorPage from './pages/ErrorPage'

// for testing purposes only (remove later)
import Medias from './pages/MediasPage'
import Fields from './pages/FieldsPage'

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/profile" component={Profile} />
				<Route path="/newsheet" component={NewSheet} />
				<Route path="/travels" component={Travels} />
				<Route path="/" component={Map} />

				<Route path="/medias" component={Medias} />
				<Route path="/fields" component={Fields} />
				<Route component={ErrorPage} />
			</Switch>
		</Layout>
	)
}
export default App
