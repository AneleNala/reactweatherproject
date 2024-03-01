import React from "react";

export default function WeatherTemperature(props){
    return(
        <div className="WeatherTemperature">
        <h1> {Math.round(props.celsius)} °C </h1>
        </div>
    
    )
}