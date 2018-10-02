const defaultState = {
  projectsList: [],
  isFetching: false,
  error: null
};

const projectsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_PROJECT_REQUEST":
      return {
        ...state,
        isFetching: true
      };
    case "ADD_PROJECT_SUCCESS":
      return {
        projectsList: [...state.projectsList, action.project],
        isFetching: false,
        error: null
      };
    case "ADD_PROJECT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default projectsReducer;
