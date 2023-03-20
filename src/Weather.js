import axios from "axios";
import React, { useState } from "react";
import Search from "./Search";
export default function Weather() {
  let [city, setCity] = useState("");
  let [res, setRes] = useState(null);
  function updateCity(event) {
    setCity(event.target.value);
  }
  function result(response) {
    setRes(response.data);
  }
  function search(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
    axios.get(url).then(result);
  }

  return (
    <div className="Weather">
      <form>
        <input
          type="text"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search " onClick={search} />
      </form>

      <Search res={res} />
    </div>
  );
}
