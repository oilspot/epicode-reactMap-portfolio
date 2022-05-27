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
            center: { latitude: 60.17121588111992, longitude: 24.942716285187476 },
            mapTypeId: "road",
            zoom: 1,
          }}
        />
        </>
    )
  }
}

export const pinRautatientori = {
  center: {
    latitude: '60.17121588111992',
    longitude: '24.942716285187476',
  },
  options: {
    title: "Rautatientori",
  },
};

export const pinArabia = {
  center: {
    latitude: 60.21264331671809,
    longitude: 24.97604853216885,
  },
  options: {
    title: "Aalto University Arabia Campus",
  },
}

// export const pushPins = [pinRautatientori, pinArabia];

