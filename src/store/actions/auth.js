import { firebase } from "../../firebase/firebase";

export const login = uid => ({
  type: "LOGIN",
  uid
});

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogin = ({ email, password }) => dispatch =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(credentials => {
      dispatch(login(credentials.user.uid));
    });

export const startLogout = () => dispatch =>
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(logout());
    });
