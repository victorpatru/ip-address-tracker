// Add Custom Map Icon
import { MapContainer, TileLayer } from "react-leaflet";
import MarketPosition from "./MarkerPosition";

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
      <MarketPosition lat={lat} lng={lng} />
    </MapContainer>
  );
}
export default DisplayLocation;
