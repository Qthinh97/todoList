import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/reducers/products.reducer";
import categoryReducer from "./redux/reducers/category.reducer";
import commonReducer from "./redux/reducers/common.reducer";
import todolistReducer from "./redux/reducers/todolist.reducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    common: commonReducer,
    list: todolistReducer,
  },
});
