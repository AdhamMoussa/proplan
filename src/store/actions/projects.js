import uuid from "uuid";
import database, { firebase } from "../../firebase/firebase";

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
  const { uid } = getState().auth;
  dispatch(fetchingRequest());
  // get projects from DB
  database
    .collection("users")
    .doc(uid)
    .get()
    .then(snapshot => {
      const { projects } = snapshot.data();
      const projectsList = [];
      if (projects && Object.keys(projects).length > 0) {
        Object.keys(projects).forEach(key => {
          projectsList.push({
            id: key,
            ...projects[key]
          });
        });
      }
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
  const { uid } = getState().auth;
  // project ID
  const projectID = uuid();

  dispatch(fetchingRequest());
  const ref = `projects.${projectID}`;
  // add project to DB
  database
    .collection("users")
    .doc(uid)
    .update({
      [ref]: { ...project }
    })
    // then >> dispatch
    .then(() => {
      dispatch(
        addProject({
          id: projectID,
          ...project
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
  const { uid } = getState().auth;

  const ref = `projects.${id}`;
  dispatch(fetchingRequest());
  // async call
  database
    .collection("users")
    .doc(uid)
    .update({
      [ref]: firebase.firestore.FieldValue.delete()
    })
    .then(() => {
      dispatch(removeProject(id));
    })
    .catch(error => {
      dispatch(fetchingFail(error.toString()));
    });
};
