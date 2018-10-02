const addProjectSuccess = (project = {}) => ({
  type: "ADD_PROJECT_SUCCESS",
  project
});

const addProjectReq = () => ({
  type: 'ADD_PROJECT_REQUEST'
});

const addProjectFail = (error) => ({
  type: 'ADD_PROJECT_FAILURE',
  error
});


export const startAddProject = project => {
  return dispatch => {
    dispatch(addProjectReq());
    // async call
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(project);
        // rej('wrong');
      }, 3000);
    }).then((res) => {
      dispatch(addProjectSuccess(res));
    }, (error) => {
      dispatch(addProjectFail(error));
    });
  };
};
