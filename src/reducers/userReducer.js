const initialState = {
  accessToken: '',
  user: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS': {
      localStorage.setItem('token', JSON.stringify(payload));
      return { ...state, ...payload };
    }

    case 'LOGOUT': {
      localStorage.clear();
      return initialState;
    }

    default:
      return state;
  }
};
