const defaultState = {
  authenticated: false,
  uid: ""
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        authenticated: true,
        uid: action.uid
      };
    case "LOGOUT":
      return {
        authenticated: false,
        uid: ""
      };
    default:
      return state;
  }
};

export default authReducer;
