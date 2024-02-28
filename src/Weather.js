import React from "react";
import "./weather.css";

export default function Weather(){
    
    return(
        <div className="Weather">

            <form>
                <div className="row">  
                <div className="col-9">
                <input type="search" placeholder="Enter your city" id="search-city" className="find-weather"/>
                </div>
                <div class="col-3">
                <input type="submit" value="Search" className="input-button"/>
                </div>
                </div>
            </form>
        <div className="row">
            <div className="col-6">
            <h1 class="fs-1">Johannesburg</h1>
            <div className="d-flex justify-content-evenly pd-4">
            <div>
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="weather-forecast">
             </img>
             </div>
             <div>
             <h1>23°C </h1>
             </div>
             <div>
            <ul>
                <li>
                    Precipitation: 0%
                </li>
                <li>
                    Humidity: 52%
                </li>
                <li>
                    Wind: 10 km/h
                </li>
            </ul>
            </div>
            </div>
            </div>
            <div className="col-6 weather-details">
                <h2 className="text-end ">Weather</h2>
                <h4 className="text-end">Wednesday 17:40</h4>
                <h4 className="text-end">Mostly sunnny</h4>

            </div>
        </div>
        </div>
    )
}
