import React from "react";
import { Marker } from "react-google-maps";

export default function GoogleMarkerComponent({ myPos }) {
  return <Marker position={myPos} />;
}
