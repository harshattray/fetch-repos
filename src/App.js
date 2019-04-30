/**
 * @Author: harsha
 * @Date:   2019-04-28T02:17:37+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-30T15:47:59+05:30
 */

import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SearchbarComponent from "./components/SearchbarComponent/SearchbarComponent";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Route exact path="/" component={SearchbarComponent} />
      </Provider>
    </Router>
  );
}

export default App;
