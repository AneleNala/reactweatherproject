import React, {useState} from "react";
import "./weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props){

    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.city);
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
            icon : response.data.weather[0].icon
        });
       
    }

    function search(){

    let apiKey="5201594abea9f3e38b70e65b11a80c24";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(showResponse);


    }

     function handleSubmit(event){
            event.preventDefault();
            search();
        }

        function handleCityChange(event){
            setCity(event.target.value);
        }

    
    if(weatherData.ready){

           return(
        <div className="Weather">

            <form onSubmit={handleSubmit}>
                <div className="row">  
                <div className="col-9">
                <input type="search" placeholder="Enter your city" id="search-city" className="find-weather" onChange={handleCityChange}/>
                </div>
                <div class="col-3">
                <input type="submit" value="Search" className="input-button"/>
                </div>
                </div>
            </form>

            <WeatherInfo data={weatherData}/>     
            
        </div>
    );
    } else{
        search();
       return "Loading..";
    }

}
