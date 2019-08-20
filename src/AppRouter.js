import setKontroler from "./components/setKontroler";
// import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";
import setMonitor from "./components/setMonitor";
import setOtomatis from "./components/setOtomatis";
import React from "react";
import { Provider } from "redux-zero/react";
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
