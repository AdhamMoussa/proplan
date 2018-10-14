const defaultState = {
  authenticated: false,
  user: {
    uid: "",
    firstName: "",
    lastName: ""
  }
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        authenticated: true,
        user: action.user
      };
    case "LOGOUT":
      return {
        ...defaultState
      };
    default:
      return state;
  }
};

export default authReducer;
