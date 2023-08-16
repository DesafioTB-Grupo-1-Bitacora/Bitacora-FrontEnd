import React from 'react';
import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import Styled from "./styles";


const center = {
  lat: 51.505,
  lng: -0.09,
}
const LocationFinder = () => {
  const map = useMapEvents({
      click(e) {
          console.log(e.latlng);
      },
  });
  return null;
};


const MapComponent = () => {
  return (
    <>
    <Styled.Map center={center} zoom={4} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <LocationFinder />
 
  </Styled.Map>

  <a href="/newsheet" target="_blank">
  <Styled.Button  >
    Nueva Ficha 
  </Styled.Button>
  </a>
  </>
    
  );
};

export default MapComponent;