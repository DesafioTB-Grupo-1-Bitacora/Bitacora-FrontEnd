import { MapContainer } from "react-leaflet";
import { styled } from "styled-components";

const Map = styled(MapContainer)`
width: 95%;
height: 50%;
border: solid grey 5px;
border-radius: 10px;
z-index: 10;
`
const Button = styled.button`

	
`;


export default {
Map, Button}