import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App, { history } from "./App";
import configureStore from "./store/configureStore";
import "./index.css";
import database, { firebase } from "./firebase/firebase";
import { login, logout } from "./store/actions/auth";
import LoadingPage from "./components/layout/LoadingPage";
import { startSetProjects } from "./store/actions/projects";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    database
      .collection("users")
      .doc(user.uid)
      .get()
      .then(snapshot => {
        store.dispatch(login({ ...snapshot.get("user") }));
        store.dispatch(startSetProjects());
        renderApp();
      });
  } else if (store.getState().auth.authenticated) {
    store.dispatch(logout());
    history.push("/");
  } else {
    history.push("/");
    renderApp();
  }
});
