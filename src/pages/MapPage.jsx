import { Link, useLocation } from 'wouter'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'

import styled from 'styled-components'

import 'leaflet/dist/leaflet.css'

const Map = styled(MapContainer)`
	height: 60%;
	border: 3px solid ${({ color }) => color};
`

const center = {
	lat: 51.505,
	lng: -0.09,
}

const MapComponent = () => {
	const [location, navigate] = useLocation()

	const LocationFinder = () => {
		const map = useMapEvents({
			click(e) {
				navigate(`/newsheet?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
				/*   console.log(e.latlng); */
			},
		})
		return null
	}
	return (
		<>
			<Map color="red" center={center} zoom={4} scrollWheelZoom={true}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

				<LocationFinder />
			</Map>

			<Link to="/newsheet">Nueva Ficha</Link>
		</>
	)
}

export default MapComponent
