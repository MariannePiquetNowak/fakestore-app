import { SWITCH_THEME, ADD_PRODUCT, SET_INFOS, ADD_INFOS } from './constants';

/* ACTION THEME */
export const setTheme = (payload) => {
  return {
    type: SWITCH_THEME,
    payload,
  };
};

/* ACTIONS PRODUCTS */
export const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};

/* ACTIONS USER */

export const addInfos = (payload) => {
  return {
    type: ADD_INFOS,
    payload,
  };
};
