import { useState } from "react";
import Styled from "./styles";

import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  ZoomControl,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { Link } from "wouter";

const Map = ({ startPosition = null }) => {
  const defaultPosition = startPosition || [51.505, -0.09];

  const [position, setPosition] = useState(defaultPosition);

  const LocationFinder = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
  };

  return (
    <Styled.Container>
      <MapContainer
        style={{ height: "262px" }}
        center={position}
        zoom={4}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ZoomControl position="topright" style={{ zIndex: 1 }} />
        <LocationFinder />

        <Marker position={position} />

        <Styled.CreateMemoryButton>
          <Link to="/newmemory" />
          <Styled.Tooltip className="tooltip">
            Haz click aquí para crear tu memory
          </Styled.Tooltip>
        </Styled.CreateMemoryButton>
      </MapContainer>
    </Styled.Container>
  );
};

export default Map;
