import { FETCH_CATEGORIES } from './categoriesTypes';
import * as categoryAPI from '../../api/categoryAPI';
import { setLoading } from '../apiState/apiStateAction';

export const getCategories = () => async dispatch => {
  try {
    const { data } = await categoryAPI.fetchCategories();
    dispatch({ type: FETCH_CATEGORIES, payload: data.categories });
    dispatch(setLoading('categories', false));
  } catch (error) {
    console.log(error);
  }
};
