const initialState = {};
export const welcomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return {
        ...state,
      };
    default:
      return state;
  }
};
