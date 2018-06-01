import { SET_FILTER } from './actionType.js';

export const setFilter = filterType => ({
  type: SET_FILTER,
  filter: filterType
})