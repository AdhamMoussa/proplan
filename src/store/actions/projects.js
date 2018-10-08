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

export const startSetProjects = () => dispatch => {
  dispatch(fetchingRequest());
  database
    .collection("projects")
    .get()
    .then(snapshot => {
      const projects = [];
      snapshot.docs.forEach(project => {
        projects.push({
          id: project.id,
          ...project.data()
        });
      });
      dispatch(setProjects(projects));
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

export const startAddProject = project => dispatch => {
  dispatch(fetchingRequest());
  // async call
  database
    .collection("projects")
    .add(project)
    .then(doc =>
      database
        .collection("projects")
        .doc(doc.id)
        .get()
    )
    .then(snapshot => {
      const newProject = {
        id: snapshot.id,
        ...snapshot.data()
      };
      dispatch(addProject(newProject));
    })
    .catch(error => {
      dispatch(fetchingFail(error.toString()));
    });
};

// Remove Project
const removeProject = id => ({
  type: "REMOVE_PROJECT",
  id
});

export const startRemoveProject = id => dispatch => {
  dispatch(fetchingRequest());
  // async call
  database
    .collection("projects")
    .doc(id)
    .delete()
    .then(() => {
      dispatch(removeProject(id));
    })
    .catch(error => {
      dispatch(fetchingFail(error.toString()));
    });
};
