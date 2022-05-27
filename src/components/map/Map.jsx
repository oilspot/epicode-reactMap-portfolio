import BingMapsReact from "bingmaps-react";
import { pushPins } from "../coordinates/Coordinates";
import React from "react";


export default class Map extends React.Component {
    constructor(props){
      super(props);

      this.state = {
          latitude: 60,
          longitude: 24,
      }

      // this.setState = {

      // }
  }

  render(){
  //console.log('da Map', pushPins);
    return(
        <>
      
        <BingMapsReact bingMapsKey="AhOPCGrVRyG2mZnl4y_K5ejq2T837LxP6EYyQXVH3HxG5SXzT7MEjWQAlTqJYfl1"
          pushPins={pushPins}
          height="600px"
          mapOptions={{
            navigationBarMode: "square",
          }}
          width="100%"
          viewOptions={{
            center: { latitude: 30, longitude: 40 },
            mapTypeId: "road",
            zoom: 1,
          }}
        />
        </>
    )
  }
}

export const pinHelsinki = {
  center: {
    latitude: 60.165249,
    longitude: 24.936056,
  },
  options: {
    title: "Helsinki",
  },
}

export const pinRome = {
  center: {
    latitude: 41.902782,
    longitude: 12.496366,
  },
  options: {
    title: "Rome",
  },
}

export const pinDubai = {
  center: {
    latitude: 25.276987,
    longitude: 55.296249,
  },
  options: {
    title: "Dubai",
  },
}

export const pinNewYork = {
  center: {
    latitude: 40.730610,
    longitude: -73.935242,
  },
  options: {
    title: "New York",
  },
}

export const pinDakar = {
  center: {
    latitude: 14.716677,
    longitude: -17.467686,
  },
  options: {
    title: "Dakar",
  },
}

export const pinTokyo = {
  center: {
    latitude: 35.712223,
    longitude: 139.771118,
  },
  options: {
    title: "Tokyo",
  },
}

