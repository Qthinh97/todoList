import { createAction } from "@reduxjs/toolkit";

export const createToDoListAction = createAction("CREATE_ITEM");
export const updateToDoListAction = createAction("UPDATE_ITEM");
export const deleteToDoListAction = createAction("DELETE_ITEM");
