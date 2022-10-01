import React, { useEffect, useMemo } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import Icon from "./Icon";

function MarketPosition({ lat, lng }) {
  const position = useMemo(() => {
    return [lat, lng];
  }, [lat, lng]);
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return (
    <>
      <Marker icon={Icon} position={position}>
        <Popup>This is the location of the IP Address or Domain</Popup>
      </Marker>
    </>
  );
}

export default MarketPosition;
