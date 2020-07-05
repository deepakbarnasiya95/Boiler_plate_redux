import React from 'react';
import { Router, Route, Switch ,Link, Redirect } from "react-router-dom";
import {createBrowserHistory} from 'history';
import routes from "./routes";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history = {browserHistory}>
      <Switch>
        {//map all the routes
          routes.map((route,index) => {
            return(
                <Route 
                  key={index}
                  exact
                  path={route.path} 
                  component={route.component}
                />
              )
          })
        }
        <Redirect from="/" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
