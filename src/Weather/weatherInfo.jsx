import clsx from 'clsx';
import React, { memo } from 'react';
import PropTypes from 'prop-types';

function WeatherInfo({ weatherDetails, clearWeather }) {
  console.log('Weather Info Render');
  // console.log(weatherDetails.length);
  if (weatherDetails != 0) {
    return (
      <div>
        {weatherDetails.map(x => (
          <div key={x.cityName}>
            <ul>
              <li> City: {x.cityName}</li>
              <li> Temperature: {`${x.temp}°${x.tempType}`}</li>
            </ul>
            <button
              type="button"
              className="weather_form__btn"
              onClick={() => clearWeather()}
            >
              Clear Data
            </button>
          </div>
        ))}
      </div>
    );
  }
  return <p>No Data</p>;
}

WeatherInfo.propTypes = {
  weatherDetails: PropTypes.arrayOf(
    PropTypes.exact({
      cityName: PropTypes.string,
      temp: PropTypes.number,
      tempType: PropTypes.string,
    }),
  ).isRequired,
};

export default memo(WeatherInfo);
