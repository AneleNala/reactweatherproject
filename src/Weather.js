import React, {useState} from "react";
import "./weather.css";
import axios from "axios"
import FormattedDate from "./FormattedDate"

export default function Weather(){

    const [weatherData, setWeatherData] = useState({ready: false});
    function showResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            date: new Date(response.data.dt * 1000),
            city:  response.data.name,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            iconUrl :"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        });
       
    }
    
    if(weatherData.ready){
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
            <h1 class="fs-1">{weatherData.city}</h1>
            <div className="d-flex justify-content-evenly pd-4">
            <div>
            <img src={weatherData.iconUrl} alt={weatherData.description}>
             </img>
             </div>
             <div>
             <h1>{Math.round(weatherData.temperature)} °C</h1>
             </div>
             <div>
            <ul>
                <li>
                    Humidity: {weatherData.humidity} %
                </li>
                <li>
                    Wind: {weatherData.wind} km/h
                </li>
            </ul>
            </div>
            </div>
            </div>
            <div className="col-6 weather-details">
                <h3 className="text-end ">Weather</h3>
                <h5 className="text-end">
                    <FormattedDate date={weatherData.date}/>
                </h5>
                <h5 className="text-end text-capitalize">{weatherData.description}</h5>

            </div>
        </div>
        </div>
    );
    } else{

    let apiKey="5201594abea9f3e38b70e65b11a80c24";
    let city = "Johannesburg"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(showResponse);

       return "Loading..";
    }

}
