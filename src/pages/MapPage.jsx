import { Link, useLocation } from 'wouter'
import { MapContainer, TileLayer, useMapEvents, Marker } from 'react-leaflet'
import {useState} from 'react'
import styled from 'styled-components'

import 'leaflet/dist/leaflet.css'

const Map = styled(MapContainer)`
	height: 60%;
	border: 3px solid ${({ color }) => color};
	border-radius: 10px;
`
const StyledLink = styled(Link)`
pointer-events: ${({disabled}) => disabled ? 'none' : 'auto'};

`
const center = {
	lat: 51.505,
	lng: -0.09,
}

const MapComponent = () => {
	const [location, navigate] = useLocation()
	const [position, setPosition] = useState([])

	const LocationFinder = () => {
		const map = useMapEvents({
			click(e) {
			
				  setPosition([e.latlng.lat, e.latlng.lng])
			},
		})
		return null
	}
	return (
		<>
			<Map color="grey" center={center} zoom={4} scrollWheelZoom={true}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

				<LocationFinder />
				{position.length &&  (<Marker position={position}>
    			</Marker>)}
			</Map>

			<StyledLink to={`/newsheet?lat=${position[0]}&lng=${position[1]}`} disabled={!position.length} >Nueva Ficha</StyledLink>

		</>
	)
}

export default MapComponent
