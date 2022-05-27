import React from "react";
import Pin from "../pin/Pin";
//import { pushPins } from "../map/Map";
import Map from "../map/Map";
import { pinArabia } from "../map/Map";
import { pinRautatientori } from "../map/Map";

export const pushPins = [pinArabia, pinRautatientori];

export default class Coordinates extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            latitude: 0,
            longitude: 0,
        };
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
       
        //const pin = new Pin(this.state);
       //console.log(pin, 'questo è pin')
       this.setState({
        latitude: e.target[0].value,
        longitude: e.target[1].value,
      })

      console.log('set state: ',this.setState);
        this.createPin(e);
    }

    createPin(e) {
        //console.log('pushpin', pushPins);
        console.log('da Coordinates: ',pushPins);
        pushPins.push({
        center:{
            latitude: e.target[0].value,
            longitude: e.target[1].value,
           },
           options:{
               title : e.target[2].value
           }
        })
    }

    render() {
        return(
            <div>
            <div className="form d-flex m-4">
                <form onSubmit={this.handleSubmit} className="form-group row col-md-12 justify-content-center">
                    <div className="col-md-3">
                        {/*<label htmlFor="latitude">Latitude</label>*/}
                        <input type="number" value={this.state.latitude} onChange={this.handleChange} name="latitude" className="form-control" placeholder="Latitude"></input>
                    </div>
                    <div className="col-md-3 justify-content-center">
                        {/*<label htmlFor="longitude">Longitude</label>*/}
                        <input type="number" value={this.state.longitude} onChange={this.handleChange} name="longitude" className="form-control" placeholder="Longitude"></input>
                    </div>
                    <div className="col-md-1 justify-content-left">
                        <button className="btn btn-success">Pin!</button>
                    </div>
                </form>
                </div>
                <div className="map m-3 justify-content-center row">
                    <Map />
                </div>
            </div>

        )
    }
}