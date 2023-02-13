export const themeInitValue = 'dark';

export const ThemeReducer = (state = themeInitValue, { type, payload }) => {
  switch (type) {
    case 'CHANGE_THEME':
      return state === 'dark' ? 'light' : 'dark';

    default:
      return state;
  }
};
