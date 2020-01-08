import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { routersAuth } from "./routers";

const AppRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={routeProps => <Component {...routeProps} />} />
); //https://reacttraining.com/react-router/web/api/Route/render-func

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            { routersAuth.map((auth, index) => (
              <AppRoute
                exact
                path={auth.path}
                component={auth.component}
                key={index}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
