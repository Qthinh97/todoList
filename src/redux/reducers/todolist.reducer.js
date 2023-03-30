import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { createToDoListAction } from "../action";

const initialState = {
  todoList: [],
};

const todolistReducer = createReducer(initialState, {
  CREATE_ITEM: (state, action) => {
    return {
      ...state,
      todoList: [action.payload, ...state.todoList],
    };
  },
  UPDATE_ITEM: (state, action) => {
    //get list
    return {
      ...state,
      todoList: action.payload,
    };
  },
  DELETE_ITEM: (state, action) => {
    //get list
    return {
      ...state,
      todoList: action.payload,
    };
  },
});

export default todolistReducer;
