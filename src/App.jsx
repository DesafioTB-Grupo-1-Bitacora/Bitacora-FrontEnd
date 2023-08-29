import { Route, Switch } from 'wouter'

import Layout from './pages/Layout'
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import Map from './pages/MapPage'

import NewMemory from './pages/NewMemoryPage'
import Profile from './pages/ProfilePage'
import Travels from './pages/TravelsPage'

import ErrorPage from './pages/ErrorPage'

// for testing purposes only (remove later)
import Medias from './pages/MediasPage'
import Fields from './pages/FieldsPage'
import LandingPage1 from './pages/LandingPage1'



function App() {
	return (
		<Layout>
			<Switch>
			<Route path="/" component={LandingPage1} />
			<Route path="/landingpage1" component={LandingPage1} />
			<Route path="/profile" component={Profile} />
			<Route path="/newmemory" component={NewMemory}/>
			{/* 		MISCUADERNOSFALtA */}
			{/* RECORDATORIOS */}
			{/* 	MICUSCRIPCION */}
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
				



			
			<Route path="/travels" component={Travels} />
			<Route path="/map" component={Map} />
				
		
				
	
				<Route path="/medias" component={Medias} />
				<Route path="/fields" component={Fields} />
				<Route component={ErrorPage} />
			</Switch>
		</Layout>
	)
}
export default App
