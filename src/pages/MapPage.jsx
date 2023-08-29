import { Link, useLocation } from 'wouter'
import { MapContainer, TileLayer, useMapEvents, Marker, ZoomControl } from 'react-leaflet'
import {useState} from 'react'
import styled from 'styled-components'
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  z-index: 10;
  background-img: url('assets/addMemory.png');
  background-size: auto;
  cursor: pointer; 
	margin: 5px;
	box-shadow: 0px 2px 8px 0px rgba(97, 97, 99, 0.50) inset;
	padding: 5px 5px;
justify-content: center;
align-items: center;

  

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
  padding: 32px 48px;
  height: 80px;


  @media (min-width: 768px) {
    padding: 32px 315px;
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
				<ZoomControl position="topright" style={{ zIndex: 1 }}/>

				<LocationFinder />
				{position.length &&  (<Marker position={position}>
    			</Marker>)}
			
			</Map>
			<CreateMemory to={`/newmemory`}> 
				
			<img src="src/assets/addMemory.png"/> 
				<Tooltip className="tooltip">
				Haz clic aquí para crear tu primer memory
       			 </Tooltip>
	
		</CreateMemory>
		</BoxCreateMemory>

		
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
