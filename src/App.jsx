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
import LandingPage1 from './pages/LandingPage1'
import LandingPage2 from './pages/LandingPage2'
import LandingPage3 from './pages/LandingPage3'


function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/profile" component={Profile} />
				<Route path="/newsheet" component={NewSheet} />
				<Route path="/travels" component={Travels} />
				<Route path="/map" component={Map} />
				
				<Route path="/" component={LandingPage1} />
				<Route path="/landingpage1" component={LandingPage1} />
				<Route path="/landingpage2" component={LandingPage2} />
				<Route path="/landingpage3" component={LandingPage3} />
				<Route path="/medias" component={Medias} />
				<Route path="/fields" component={Fields} />
				<Route component={ErrorPage} />
			</Switch>
		</Layout>
	)
}
export default App
