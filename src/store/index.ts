import { combineReducers, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
import { SettingsReducer } from "./settings";
import { WalletReducer } from "./wallet";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["settings"],
  blacklist: [],
};

const rootReducer = combineReducers({
  settings: SettingsReducer,
  wallet: WalletReducer,
});
export type AppState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
