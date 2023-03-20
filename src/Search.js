import React from "react";

export default function Result(props) {
  if (props.res != null) {
    let imageSrc = `http://openweathermap.org/img/wn/${props.res.weather[0].icon}@2x.png`;
    return (
      <div>
        <ul>
          <li>Temperature: {Math.round(props.res.main.temp)}°C</li>
          <li>Description: {props.res.weather[0].description}</li>
          <li>Humidity: {props.res.main.humidity}%</li>
          <li>Wind: {props.res.wind.speed}km/h</li>
          <li>
            <img alt="weather icon" src={imageSrc} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <br />;
  }
}
