import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function Map() {
  const position = [-24.5883635, 25.9088035];
  return (
    <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={position}>
        <Popup>
          Creative Dam <br /> (PTY) LTD.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
