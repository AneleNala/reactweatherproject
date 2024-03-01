import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props){

    return (

        <div className="WeatherInfo">

        <div className="row">
            <div className="col-6">
            <h1 class="fs-1">{props.data.city}</h1>
            <div className="d-flex justify-content-evenly pd-4">
            <div>
            <WeatherIcon code={props.data.icon} />
             </div>
             <div>
             <h1>{Math.round(props.data.temperature)} °C</h1>
             </div>
             <div>
            <ul>
                <li>
                    Humidity: {props.data.humidity} %
                </li>
                <li>
                    Wind: {props.data.wind} km/h
                </li>
            </ul>
            </div>
            </div>
            </div>
            <div className="col-6 weather-details">
                <h3 className="text-end ">Weather</h3>
                <h5 className="text-end">
                    <FormattedDate date={props.data.date}/>
                </h5>
                <h5 className="text-end text-capitalize">{props.data.description}</h5>

            </div>
        </div>

        </div>
    );
}