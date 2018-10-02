import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "./reducers/authReducer";
import projectsReducer from "./reducers/projectsReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
  createStore(
    combineReducers({
      auth: authReducer,
      projects: projectsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
