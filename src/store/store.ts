import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { testAPI } from "../services/TestService";

const rootReducer = combineReducers({
  [testAPI.reducerPath]: testAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(testAPI.middleware), //middleware(redux-thunk)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
