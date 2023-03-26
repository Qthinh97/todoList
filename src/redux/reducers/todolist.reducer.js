import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const todolistReducer = createReducer(initialState, {
  LIST_ITEM: (state, action) => {
    //get list
    return {
      ...state,
      list: action.payload,
    };
  },
});

export default todolistReducer;
