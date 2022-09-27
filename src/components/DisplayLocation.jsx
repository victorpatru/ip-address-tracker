import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function DisplayLocation() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[1065px] w-full relative z-10"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>Romania</Popup>
      </Marker>
    </MapContainer>
  );
}
export default DisplayLocation;
