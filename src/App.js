import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { listen } from "./app/listener";
import "upkit/dist/style.min.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function App() {
  React.useEffect(() => {
    listen();
    getCart();
  }, []);
  return (
    <div>
      <Provider>
        <Router>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <GuardRoute path="/logout">
              <Logout />
            </GuardRoute>
            <GuestOnlyRoute path="/">
              <Login />
            </GuestOnlyRoute>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
