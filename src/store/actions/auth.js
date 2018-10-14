import database, { firebase } from "../../firebase/firebase";

export const login = user => ({
  type: "LOGIN",
  user
});

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogin = ({ email, password }) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(credentials =>
      database
        .collection("users")
        .doc(credentials.user.uid)
        .get()
    );

export const startLogout = () => dispatch =>
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(logout());
    });
