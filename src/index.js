import registerServiceWorker from "./registerServiceWorker";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./redux/reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./component/app/app.component";

const reduxDebugger =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducer,
  reduxDebugger,
  applyMiddleware(logger, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
