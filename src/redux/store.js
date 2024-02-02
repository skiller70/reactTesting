import { configureStore } from "@reduxjs/toolkit";
import { mathReducer } from "./reducer";

export const store = configureStore({ reducer: { mathReducer, } });
