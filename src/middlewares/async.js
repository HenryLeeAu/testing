export default ({ dispatch }) => next => action => {
  //cehck to see of the action has a ppromise on its 'payload' property

  // it does waiting for the promise


  //if it doesn't send to next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  //dispatch new action with the response data
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
