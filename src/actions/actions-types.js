import { SWITCH_THEME } from './constants';

export const setTheme = (payload) => {
  return {
    type: SWITCH_THEME,
    payload,
  };
};
