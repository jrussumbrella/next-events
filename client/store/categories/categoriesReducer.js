import { FETCH_CATEGORIES } from './categoriesTypes';
const initState = {
  datas: []
};
export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, datas: action.payload };
    default:
      return state;
  }
};
