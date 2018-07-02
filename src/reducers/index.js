import { ADD_SELECTED_USER } from '../constants/action-types';

const initialState = {
  selectedUser: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECTED_USER:
      return {
        ...state,
        selectedUser : action.payload
      }
    default:
      return state
  }
};

export default rootReducer;
