import React from "react";
import "./styles.css";
import GoogleMapComponent from "./components/googlemap.component.js";

export default function App() {
  const [myPos, setPos] = React.useState({
    lat: 34.0536909,
    lng: -118.2427666
  });
  const [posInfo, setInfo] = React.useState({});
  const findPos = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          console.log(position);
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setPos(pos);
          var url =
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            pos.lat +
            "," +
            pos.lng +
            "&key=AIzaSyDoi0kDoetjxsvsctCrRb99I5lu1GJMj_8";
          fetch(url, { method: "get" })
            .then(res => res.json())
            .then(result => {
              setInfo(result);
              console.log(result);
            });
        },
        function() {
          console.log("Google map error!");
        }
      );
    } else {
      console.log("Browser doesn't support Geolocation");
    }
  };
  return (
    <div className="App">
      <GoogleMapComponent myPos={myPos} posInfo={posInfo} />
      <div className="find-btn-div">
        <button className="find-locatin-btn" onClick={() => findPos()}>
          Find my location
        </button>
      </div>
    </div>
  );
}
