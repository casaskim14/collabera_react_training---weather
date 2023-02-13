import React from 'react';
import PropTypes from 'prop-types';

function Errors({ errors }) {
  return (
    <div className="">
      {errors.map((x, i) => (
        <div
          key={i}
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 fixed left-10 min-w-[320px]"
          role="alert"
          style={{
            bottom: i * 90 + 10,
          }}
        >
          <p className="font-bold">{x.title}</p>
          <p>{x.message}</p>
        </div>
      ))}
    </div>
  );
}

Errors.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      message: PropTypes.string,
      loadingId: PropTypes.number,
    }),
  ).isRequired,
};

export default Errors;
