const SET_USER = "SET_USER";
const CLEAR_USER = "CLEAR_USER";

export const setUser = (user) => ({ type: SET_USER, currentUser: user });
export const clearUser = () => ({ type: CLEAR_USER });

const initialState = {
  currentUser: null,
  isLoading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.currentUser,
        isLoading: false,
      };
    case CLEAR_USER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
