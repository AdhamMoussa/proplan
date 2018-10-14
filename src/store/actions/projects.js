import database from "../../firebase/firebase";

// Fetching request action
const fetchingRequest = () => ({
  type: "FETCHING_REQUEST"
});

// Fetching failure
const fetchingFail = error => ({
  type: "FETCHING_FAIL",
  error
});

// Set projects on app load
const setProjects = projects => ({
  type: "SET_PROJECTS",
  projects
});

export const startSetProjects = () => (dispatch, getState) => {
  // user id
  const { uid } = getState().auth.user;
  dispatch(fetchingRequest());
  // get projects from DB
  database
    .collection(`users/${uid}/projects`)
    .get()
    .then(snapshot => {
      const projectsList = [];
      snapshot.docs.forEach(doc => {
        projectsList.push({
          id: doc.id,
          ...doc.data()
        });
      });
      dispatch(setProjects(projectsList));
    })
    .catch(error => {
      dispatch(fetchingFail(error.toString()));
    });
};

// Add Project
const addProject = project => ({
  type: "ADD_PROJECT",
  project
});

export const startAddProject = project => (dispatch, getState) => {
  // user id
  const { uid } = getState().auth.user;

  dispatch(fetchingRequest());
  // add project to DB
  database
    .collection(`users/${uid}/projects`)
    .add(project)
    // then >> dispatch
    .then(doc =>
      database
        .collection(`users/${uid}/projects`)
        .doc(doc.id)
        .get()
    )
    .then(snapshot => {
      dispatch(
        addProject({
          id: snapshot.id,
          ...snapshot.data()
        })
      );
    })
    // catch and dispatch errors
    .catch(error => {
      dispatch(fetchingFail(error.toString()));
    });
};

// Remove Project
const removeProject = id => ({
  type: "REMOVE_PROJECT",
  id
});

export const startRemoveProject = id => (dispatch, getState) => {
  // user id
  const { uid } = getState().auth.user;

  dispatch(fetchingRequest());
  // async call
  database
    .collection(`users/${uid}/projects`)
    .doc(id)
    .delete()
    .then(() => {
      dispatch(removeProject(id));
    })
    .catch(error => {
      dispatch(fetchingFail(error.toString()));
    });
};
