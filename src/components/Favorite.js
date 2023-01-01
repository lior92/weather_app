import React from "react";
import { useSelector } from "react-redux";

const Favorite = () => {
  const favoriets = useSelector((state) => state.favorites.favorites);
  favoriets.forEach(city => {
    console.log(city.WeatherIcon      )
  });



  return(
<div className="five_days_wrapper">

    {favoriets.map(city=>{
      return <div key={city.EpochTime} id="favorite_div">
        <h6>{city.LocalSource.Name}</h6>
        <p>{city.WeatherText}</p>
           <img  src={require(`../imges/${city.WeatherIcon}.png`)} />
        <p id="temp_p">{city.Temperature.Metric.Value.toString()}
        </p>
      </div>
    })}
    </div>
  ) 
};

export default Favorite;
