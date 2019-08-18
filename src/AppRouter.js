import setKontroler from "./components/setKontroler";
// import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";
import setMonitor from "./components/setMonitor";
import setOtomatis from "./components/setOtomatis";
import React from "react";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/kontrol" exact component={setKontroler} />
        <Route path="/monitor" component={setMonitor} />
        <Route path="/otomatis" component={setOtomatis} />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
