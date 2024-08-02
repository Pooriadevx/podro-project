import React from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { mapUrl } from "../../constants/locationData";
import { MapLeafletPropsType } from "../../types/locationData";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const MapLeaflet: React.FC<MapLeafletPropsType> = ({ position }) => {
  return (
    <MapContainer center={position} zoom={11} style={{ height: "inherit" }}>
      <TileLayer url={mapUrl} />
      <Marker position={position} icon={L.icon({ iconUrl, shadowUrl })} />
    </MapContainer>
  );
};

export default MapLeaflet;
