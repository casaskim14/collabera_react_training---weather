import axiosInstance from './axiosInstance';

export default async ({ dispatch, apiData, type, meta }) => {
  try {
    dispatch({
      type: `${type}_REQUEST`,
      meta,
    });
    const res = await axiosInstance(apiData);
    dispatch({
      type: `${type}_SUCCESS`,
      payload: apiData.method === 'delete' ? apiData.data : res,
      meta,
    });
  } catch (err) {
    dispatch({
      type: `${type}_FAIL`,
      payload: {
        message: err.message,
        title: `${type
          .split('_')
          .map((x, i) => {
            if (i === 0) {
              return `${x[0].toUpperCase()}${x.slice(1).toLocaleLowerCase()}`;
            }
            return x.toLocaleLowerCase();
          })
          .join(' ')} fail`,
      },
      meta,
    });
  }
};
