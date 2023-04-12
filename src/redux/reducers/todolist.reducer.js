import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todoList: [],
};

const todolistReducer = createReducer(initialState, {
  CREATE_ITEM: (state, action) => {
    const newValues = {
      ...action.payload,
      id: uuidv4(),
    };
    const newTodoList = [newValues, ...state.todoList];
    return {
      ...state,
      todoList: newTodoList,
    };
  },
  UPDATE_ITEM: (state, action) => {
    const { id, values } = action.payload;
    const newTodoList = [...state.todoList];
    const index = state.todoList.findIndex((item) => item.id === id);
    newTodoList.splice(index, 1, values);
    return {
      ...state,
      todoList: newTodoList,
    };
  },
  DELETE_ITEM: (state, action) => {
    const { id } = action.payload;
    const newTodoList = [...state.todoList];
    const index = state.todoList.findIndex((item) => item.id === id);
    newTodoList.splice(index, 1);
    return {
      ...state,
      todoList: newTodoList,
    };
  },
  SEARCH_ITEM: (state, action) => {
    //get list
    return {
      ...state,
      todoList: action.payload,
    };
  },
});

export default todolistReducer;
