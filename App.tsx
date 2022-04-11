import React from "react";
import { store, persistor } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Welfin from "@/App";

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Welfin />
    </PersistGate>
  </Provider>
);
