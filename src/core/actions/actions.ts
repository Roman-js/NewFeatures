const GET_CATS = 'GET_CATS/PROFILE';
const GET_CATS_SUCESS = 'GET_CATS_SUCCESS/PROFILE';

export const getCatsAction = () => ({
  type: GET_CATS,
});
export const getCatsActionSuccess = data => ({
  type: GET_CATS_SUCESS,
  data,
});
