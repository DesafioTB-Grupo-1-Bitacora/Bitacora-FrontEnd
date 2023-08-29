import { Link, useLocation } from 'wouter'
import { MapContainer, TileLayer, useMapEvents, Marker, ZoomControl } from 'react-leaflet'
import {useState} from 'react'
import styled from 'styled-components'
import addMemoryImage from '../assets/addMemory.png';



import 'leaflet/dist/leaflet.css'

const Map = styled(MapContainer)`
	height: 262px;

`
const StyledLink = styled(Link)`
pointer-events: ${({disabled}) => disabled ? 'none' : 'auto'};

`

const CreateMemory = styled(Link)`
  position: absolute;
  bottom: 10px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 22px solid white;
  z-index: 1000;

  background-size: cover;
  cursor: pointer; 

  &:hover .tooltip {
    display: block;
  }
`;

const Tooltip = styled.div`
  display: none;
  position: absolute;
  bottom: calc(100% + 5px); 
  left: 50%; 
  transform: translateX(-110%);
  background-color:var(--gris-oscuro, #616163);
  padding: 10px;

  color: white;
  padding: 10px 10px;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap; 
`
;
const BoxCreateMemory = styled.div`

position: relative;
height: 262px;

`
const BoxNotebookAndMemories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  width: 100%;
  padding: 8px 24px;

  @media (min-width: 768px) {
    padding: 4px 315px;
  }
`

const Notebooks = styled(Link)`
text-decoration: none;
color: inherit;

`
const Memories = styled(Link)`
text-decoration: none;
color: inherit;
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
			<BoxCreateMemory>
			<Map color="grey" center={center} zoom={4} scrollWheelZoom={true} zoomControl={false}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<ZoomControl position="topright" />

				<LocationFinder />
				{position.length &&  (<Marker position={position}>
    			</Marker>)}
			
			</Map>
			<CreateMemory to={`/map`}>
				A
				<Tooltip className="tooltip">
				Haz clic aquí para crear tu primer memory
       			 </Tooltip>
	
		</CreateMemory>
		</BoxCreateMemory>
{/* 
		Aquí va un styled wraper para el contenido que está por debajo del mapa */}

		<BoxNotebookAndMemories>
			<Notebooks to={`/`}>
				Cuadernos
			</Notebooks>
			<Memories to={`/`}>
			Todos los memories
			</Memories>
		</BoxNotebookAndMemories>
		
	
			
		</>
	)
}

export default MapComponent
