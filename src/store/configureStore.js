import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import projectsReducer from "./reducers/projectsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
  createStore(
    combineReducers({
      auth: authReducer,
      projects: projectsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
