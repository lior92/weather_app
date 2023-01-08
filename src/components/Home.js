import React, { useContext, useEffect, useState } from "react";
//fake data
import data from "./datamemo.json";
import five_Days from "./5Days.json";
import axios from "axios";
import { Form, ListGroup, Button } from "react-bootstrap";
import { userContext } from "../App";
import "../App.css";

const Home = () => {
  //HOOKS
  //curret city key(by default tel aviv)
  const [current_key, setCurrent_key] = useState("215854");
  //current city
  const [curren_city, setCurrentcity] = useState("TLV");
  //current temp
  const [current_temp, setCurrent_temp] = useState(NaN);
  //autocomplete cities
  const [cities, setCities] = useState([]);
  //five days forecast
  const [five_days_forecast, setFive_days_forecast] = useState([]);

  //use context
  const user_context = useContext(userContext);
  let key = user_context.API_KEY;

  //on first load update 5 days and current weather of tell aviv
  useEffect(() => {
    //DEMO
    // const data = [
    //   {
    //     LocalObservationDateTime: "2022-12-31T04:00:00+08:00",
    //     EpochTime: 1672430400,
    //     WeatherText: "Overcast",
    //     WeatherIcon: 7,
    //     HasPrecipitation: false,
    //     PrecipitationType: null,
    //     LocalSource: {
    //       Id: 7,
    //       Name: "Huafeng",
    //       WeatherCode: "02",
    //     },
    //     IsDayTime: false,
    //     Temperature: {
    //       Metric: {
    //         Value: 4.2,
    //         Unit: "C",
    //         UnitType: 17,
    //       },
    //       Imperial: {
    //         Value: 40,
    //         Unit: "F",
    //         UnitType: 18,
    //       },
    //     },
    //     MobileLink:
    //       "http://www.accuweather.com/en/cn/hanzhong/60453/current-weather/60453?lang=en-us",
    //     Link: "http://www.accuweather.com/en/cn/hanzhong/60453/current-weather/60453?lang=en-us",
    //   },
    // ];
    // setCurrent_temp(data[0].Temperature.Metric["Value"]);
    // setFive_days_forecast(five_Days.DailyForecasts);

    //!Origin
    // default tlv
    //current

    axios
      .get(
        `http://dataservice.accuweather.com/currentconditions/v1/${current_key}?apikey=${key}`
      )
      .then((response) => {
        const data = response.data;
        setCurrent_temp(data[0].Temperature.Metric["Value"]);
      })
      .catch((err) => console.log(err));

    //!Origin
    //5 days default tlv
    //5 days
    axios
      .get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${current_key}?apikey=${key}`
      )
      .then((response) => {
        const data = response.data;
        setFive_days_forecast(data.DailyForecasts);
      })
      .catch((err) => console.log(err));
  }, []);

  //Autocomplete search
  const autocompleteSearch = (text) => {
    //DEMO
    // let arr = [];
    // data.map((city) => {
    //   if (city.LocalizedName.toLowerCase().startsWith(text)) {
    //     arr.push(city);
    //   }
    //   if (text.length == 0) {
    //     arr = [];
    //   }
    // });
    // setCities(arr);

    //!Origin
    let arr = [];
    if (text.length == 0) {
      setCities([]);
    }
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${text}`
      )
      .then((response) => {
        const data = response.data;
        data.map((city) => {
          if (city.LocalizedName.toLowerCase().startsWith(text)) {
            arr.push(city);
          }
        });
        setCities(arr);
      })
      .catch((err) => console.log(err));
  };

  //Current weather
  const currentWeather = (city_key, city_name) => {
    //update current (not part of demo)
    setCurrentcity(city_name);
    //DEMO
    // const data = [
    //   {
    //     LocalObservationDateTime: "2022-12-31T04:00:00+08:00",
    //     EpochTime: 1672430400,
    //     WeatherText: "Overcast",
    //     WeatherIcon: 7,
    //     HasPrecipitation: false,
    //     PrecipitationType: null,
    //     LocalSource: {
    //       Id: 7,
    //       Name: "Huafeng",
    //       WeatherCode: "02",
    //     },
    //     IsDayTime: false,
    //     Temperature: {
    //       Metric: {
    //         Value: 4.2,
    //         Unit: "C",
    //         UnitType: 17,
    //       },
    //       Imperial: {
    //         Value: 40,
    //         Unit: "F",
    //         UnitType: 18,
    //       },
    //     },
    //     MobileLink:
    //       "http://www.accuweather.com/en/cn/hanzhong/60453/current-weather/60453?lang=en-us",
    //     Link: "http://www.accuweather.com/en/cn/hanzhong/60453/current-weather/60453?lang=en-us",
    //   },
    // ];
    // setCurrent_temp(data[0].Temperature.Metric["Value"]);

    //!Origin
    axios
      .get(
        `http://dataservice.accuweather.com/currentconditions/v1/${city_key}?apikey=${key}`
      )
      .then((response) => {
        const data = response.data;
        setCurrent_temp(data[0].Temperature.Metric["Value"]);
      })
      .catch((err) => console.log(err));
  };

  //5 days forecast
  const fiveDaysForecast = (city_key) => {
    setCities([]);
    //DEMO
    // setFive_days_forecast(five_Days.DailyForecasts);
    //!Origin
    axios
      .get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city_key}?apikey=${key}`
      )
      .then((response) => {
        const data = response.data;
        // console.log(data);
        setFive_days_forecast(data.DailyForecasts);
      })
      .catch((err) => console.log(err));
  };

  const days = [
    "sunday",
    "modday",
    "thusday",
    "wendsaday",
    "thurday",
    "firday",
    "sutartday",
  ];

  function currentDay() {
    let d = new Date();
    let n = d.getDay();
    return n;
  }

  return (
    <div className="home">
      <div className="current">
        <h6>{curren_city}</h6>
        <p>{current_temp}&#8451;</p>
        <img
          id="current_img"
          src={require(`../imges/${five_days_forecast[0].Day.Icon}.png`)}
        />
      </div>

      <div className="input_container">
        <Form>
          <Form.Label>Search city</Form.Label>
          <Form.Control
            type="text"
            className="custom-input"
            placeholder="Search.."
            onChange={(e) => autocompleteSearch(e.target.value)}
          />
        </Form>
      </div>
      <ListGroup className="list_group" variant="flush">
        {cities.map((city, i) => {
          return (
            <ListGroup.Item key={i}>
              <span
                onClick={() => {
                  currentWeather(city.Key, city.LocalizedName);
                  fiveDaysForecast(city.Key);
                }}
              >
                {city.LocalizedName}
              </span>
            </ListGroup.Item>
          );
        })}
      </ListGroup>

      <div className="five_days_wrapper">
        {five_days_forecast.map((day, i) => {
          const dayIndex = (currentDay() + i) % 7;
          return (
            <div key={day.Date}>
              <h6 id="day_p">{days[dayIndex]}</h6>
              <p id="date_p">{day.Date.split("T").shift()}</p>
              <p>{day.Day["IconPhrase"]}</p>
              {}
              <img src={require(`../imges/${day.Day["Icon"]}.png`)} />
              <p id="temp_p">
                <span>min-max</span>
                <br />
                {Math.round(
                  parseInt((day.Temperature.Minimum["Value"] - 32) / 1.8)
                )}
                -
                {Math.round(
                  parseInt((day.Temperature.Maximum["Value"] - 32) / 1.8)
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
