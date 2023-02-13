import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const WeatherForm = forwardRef(({ searchCityWeather, weatherDetails }, ref) => {
  console.log('Weather Form render');
  return (
    <form
      className="weather__form  justify-center"
      onSubmit={searchCityWeather}
    >
      <input ref={ref} type="text" className="weather_form__input" />
      <button type="submit" className="weather_form__btn">
        Search City
      </button>
    </form>
  );
});

WeatherForm.propTypes = {
  searchCityWeather: PropTypes.func,
};

export default WeatherForm;
