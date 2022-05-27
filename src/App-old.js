// import React from 'react';
// import './App.css';

// import { Loader } from '@googlemaps/js-api-loader';
// import { displayMap } from '../src/components/map/Map';

// const apiOptions = {
//   apiKey: "AIzaSyBXohCEIS-7UXlkGVZIwo6CeWuSXbfrP0U"
// }

// const loader = new Loader(apiOptions);

// loader.then(() => {
//   console.log('Maps JS API Loaded');
//   const map = displayMap();
// });

//     // function displayMap() {
//     //   const mapOptions = {
//     //     center: { lat: -33.860664, lng: 151.208138 },
//     //     zoom: 14,
//     //     mapId: 'f3927cf04e252122'
//     //   };
//     //   const mapDiv = document.getElementById('map');
//     //   const map = new google.maps.Map(mapDiv, mapOptions);
//     //   return map;
//     // }

// function App() {
//   return (
//     <div id="map">

//     </div>

//   );
// }

// export default App;

///////////////////////////////////////////////////////

// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// <Wrapper apiKey={"AIzaSyBXohCEIS-7UXlkGVZIwo6CeWuSXbfrP0U"}>
//   <Map center={center} zoom={zoom}>
//     <Marker position={position} />
//   </Map>
// </Wrapper>

// const render = (status: Status) => {
//   return <h1>{status}</h1>;
// };

// const Map: React.FC<MapProps> = ({
//   onClick,
//   onIdle,
//   children,
//   style,
//   ...options
// }) => {
//   return React.createElement(
//     React.Fragment,
//     null,
//     React.createElement("div", { ref: ref, style: style }),
//     React.Children.map(children, (child) => {
//       if (React.isValidElement(child)) {
//         // set the map prop on the child component
//         return React.cloneElement(child, { map });
//       }
//     })
//   );
// }

// const ref = React.useRef(null);
// const [map, setMap] = React.useState();

// React.useEffect(() => {
//   if (ref.current && !map) {
//     setMap(new window.google.maps.Map(ref.current, {}));
//   } return <div ref={ref} />
// }, [ref, map]);

// interface MapProps extends google.maps.MapOptions {
//   style: { [key: string]: string };
//   onClick?: (e: google.maps.MapMouseEvent) => void;
//   onIdle?: (map: google.maps.Map) => void;
// }



// //return <div ref={ref} style={style} />;

// // because React does not do deep comparisons, a custom hook is used
// // see discussion in https://github.com/googlemaps/js-samples/issues/946
// useDeepCompareEffectForMaps(() => {
//   if (map) {
//     map.setOptions(options);
//   }
// }, [map, options]);

// React.useEffect(() => {
//   if (map) {
//     ["click", "idle"].forEach((eventName) =>
//       google.maps.event.clearListeners(map, eventName)
//     );
//     if (onClick) {
//       map.addListener("click", onClick);
//     }

//     if (onIdle) {
//       map.addListener("idle", () => onIdle(map));
//     }
//   }
// }, [map, onClick, onIdle]);

// const Marker = (options) => {
//   const [marker, setMarker] = React.useState();

//   React.useEffect(() => {
//     if (!marker) {
//       setMarker(new google.maps.Marker());
//     }

//     // remove marker from map on unmount
//     return () => {
//       if (marker) {
//         marker.setMap(null);
//       }
//     };
//   }, [marker]);
//   React.useEffect(() => {
//     if (marker) {
//       marker.setOptions(options);
//     }
//   }, [marker, options]);
//   return null;
// };


// const [clicks, setClicks] = React.useState([]);
// const [zoom, setZoom] = React.useState(3); // initial zoom
// const [center, setCenter] = React.useState({
//   lat: 0,
//   lng: 0,
// });

// const onClick = (e) => {
//   // avoid directly mutating state
//   setClicks([...clicks, e.latLng]);
// };

// const onIdle = (m) => {
//   console.log("onIdle");
//   setZoom(m.getZoom());
//   setCenter(m.getCenter().toJSON());
// };


