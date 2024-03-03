import React from "react";

export default function WeatherTemperature(props){

         return(
        <div className="WeatherTemperature">
        <h1> {Math.round(props.celsius)} 
        <small className="unit"> °C </small>
          </h1>
        </div>
         );
}