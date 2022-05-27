import React from "react";
import Coordinates from "./components/coordinates/Coordinates";
import Map from "./components/map/Map";
import {Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
        <div className="page text-center" width="100%">
            <h1>myM@p</h1>

            <div className="map m-3 justify-content-center">
                <Coordinates />

            </div>

        </div>

  )
}

export default App;