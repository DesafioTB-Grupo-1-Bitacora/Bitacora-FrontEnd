import { Link, useLocation } from "wouter";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import marker from "/assets/Marker.svg";
import { Icon } from "leaflet";
const myIcon = new Icon({
  iconUrl: marker,
  iconSize: [32, 32],
});
import { Marker } from "react-leaflet/Marker";
import { useState } from "react";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";

import { useSearch } from "wouter/use-location";

const Map = styled(MapContainer)`
  height: 262px;
  top: 25px;
`;
const StyledLink = styled(Link)`
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

const CreateMemory = styled(Link)`
  position: absolute;
  bottom: -46px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  z-index: 10;

  background-size: auto;
  cursor: pointer;
  margin: 5px;
  box-shadow: 0px 2px 8px 0px rgba(97, 97, 99, 0.5) inset;
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
  bottom: calc(100% + 2px);
  left: 50%;
  transform: translateX(-100%);
  background-color: var(--gris-oscuro, #616163);
  padding: 10px;

  color: white;
  padding: 10px 10px;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap;
`;
const BoxCreateMemory = styled.div`
  position: relative;
  height: 262px;
`;
const BoxNotebookAndMemories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 32px 48px;
  height: 80px;
  margin-top: 20px;

  @media (min-width: 768px) {
    padding: 32px 315px;
  }
`;

const Notebooks = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 16px;
`;
const Memories = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 16px;
`;

const center = {
  lat: 51.505,
  lng: -0.09,
};

const MapComponent = () => {
  const search = useSearch();
  const searchParams = new URLSearchParams(search);
  const defaultPosition = [];

  if (searchParams.get("latitude") && searchParams.get("longitude")) {
    defaultPosition[0] = searchParams.get("latitude");
    defaultPosition[1] = searchParams.get("longitude");
  }
  const [location, navigate] = useLocation();
  const [position, setPosition] = useState(defaultPosition);

  const LocationFinder = () => {
    const map = useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };
  return (
    <>
      <BoxCreateMemory>
        <Map
          color="grey"
          center={center}
          zoom={4}
          scrollWheelZoom={true}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <ZoomControl position="topright" />

          <LocationFinder />
          {position.length && (
            <Marker position={position} icon={myIcon}></Marker>
          )}
        </Map>
        <CreateMemory
          to={`/newmemory?latitude=${position[0]}&longitude=${position[1]}`}
        >
          <img src="/assets/addMemory.png" />
          <Tooltip className="tooltip">
            Haz clic aquí para crear tu primer memory
          </Tooltip>
        </CreateMemory>
      </BoxCreateMemory>

      <BoxNotebookAndMemories>
        <Notebooks to={`/`}>Cuadernos</Notebooks>

        <Memories to="/memories">Todos los memories</Memories>
      </BoxNotebookAndMemories>
    </>
  );
};

export default MapComponent;
