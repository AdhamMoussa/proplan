const defaultState = {
  projectsList: [],
  isFetching: false,
  projectsFetched: false,
  error: ""
};

const projectsReducer = (state = defaultState, action) => {
  switch (action.type) {
    // Fetching request
    case "FETCHING_REQUEST":
      return {
        ...state,
        isFetching: true
      };
    // Fetching failure
    case "FETCHING_FAIL":
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    // Set
    case "SET_PROJECTS":
      return {
        projectsList: action.projects,
        isFetching: false,
        projectsFetched: true,
        error: ""
      };
    // ADD
    case "ADD_PROJECT":
      return {
        ...state,
        projectsList: [...state.projectsList, action.project],
        isFetching: false,
        error: ""
      };
    // Remove
    case "REMOVE_PROJECT":
      return {
        ...state,
        projectsList: state.projectsList.filter(
          project => project.id !== action.id
        ),
        isFetching: false,
        error: ""
      };
    default:
      return state;
  }
};

export default projectsReducer;
