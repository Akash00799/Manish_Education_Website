import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types related to Redux-Persist
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        // Ignore non-serializable paths like `register`
        ignoredPaths: ["cart.register"],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
