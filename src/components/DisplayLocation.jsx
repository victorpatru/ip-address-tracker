import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function DisplayLocation({ userData }) {
  const {
    location: { lat, lng, region, city },
  } = userData;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[1065px] w-full relative z-10"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>{`The address attached to this IP can be found in ${city}, ${region}`}</Popup>
      </Marker>
    </MapContainer>
  );
}
export default DisplayLocation;
