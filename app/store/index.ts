import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  quizReducer,
  updateCorrect,
  updateIncorrect,
  updateCurrentQueNo,
  resetQuizState,
  updateCurrentCategory,
} from "./slices/quizSlice";

const persistConfig = { key: "root", version: 1, storage };
const rootReducer = combineReducers({
  quiz: quizReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REJECT",
        ],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export {
  store,
  updateCorrect,
  updateIncorrect,
  updateCurrentQueNo,
  resetQuizState,
  updateCurrentCategory,
};
export const persistor = persistStore(store);
