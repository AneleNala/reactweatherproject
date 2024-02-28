import React from "react";
import "./weather.css";

export default function Weather(){
    
    return(
        <div className="Weather">

            <form>
                <div className="row">  
                <div className="col-9">
                <input type="search" placeholder="Enter your city" id="search-city" name="find-weather"/>
                </div>
                <div class="col-3">
                <input type="submit" value="Search" className="btn btn-secondary"/>
                </div>
                </div>
            </form>
        <div className="row">
            <div className="col-6">
            <h1>Johannesburg</h1>
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="weather-forecast">
             </img>
             <h2>23°C</h2>
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
            <div className="col-6">
                <h1>Weather</h1>
                <h4>Wednesday 17:40</h4>
                <h4>Mostly sunnny</h4>

            </div>
        </div>
        <footer>
            This is coded by <a href="">Anele Nala </a> <a href="">open-sourced</a>
        </footer>
        </div>
    )
}
