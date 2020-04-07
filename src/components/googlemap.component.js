import React from "react";
import { withGoogleMap, GoogleMap, InfoWindow } from "react-google-maps";
import GoogleMarkerComponent from "./googlemaker.component.js";

export default function GoogleMapComponent({ myPos, posInfo }) {
  const GoogleMapExample = withGoogleMap(props => {
    return (
      <GoogleMap defaultCenter={myPos} defaultZoom={13}>
        <GoogleMarkerComponent myPos={myPos} />
        {Object.keys(posInfo).length && (
          <InfoWindow position={myPos}>
            <div>
              compound_code: {posInfo.plus_code.compound_code}
              <br />
              global_code: {posInfo.plus_code.global_code}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  });
  return (
    <div>
      <GoogleMapExample
        containerElement={<div style={{ height: "100vh", width: "100%" }} />}
        mapElement={<div style={{ height: "100vh" }} />}
      />
    </div>
  );
}
