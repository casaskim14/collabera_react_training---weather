import React, { memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const filterBtns = [
  {
    text: 'All',
    value: 'all',
  },
  {
    text: 'Pending',
    value: 'pending',
  },
  {
    text: 'Completed',
    value: 'completed',
  },
];

function WeatherFilter({ setFilter, cityName }) {
  console.log('WeatherFilter render');
  return (
    <div className="w-full flex">
      {filterBtns.map(x => (
        <button
          key={x.value}
          type="button"
          className={clsx('btn flex-1', {
            'btn--active': filterType === x.value,
          })}
          onClick={() => setFilter(x.value)}
        >
          {x.text}
        </button>
      ))}
    </div>
  );
}

WeatherFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  // filterType: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
  cityName: PropTypes.string,
};

export default memo(WeatherFilter);
