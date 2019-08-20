import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "redux-zero/react";
import setKontroler from "./pages/setKontroler";
import setMonitor from "./pages/setMonitor";
import setOtomatis from "./pages/setOtomatis";
import store from "./service/store";

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={setKontroler} />
          <Route path='/monitor' component={setMonitor} />
          <Route path='/otomatis' component={setOtomatis} />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default AppRouter;
