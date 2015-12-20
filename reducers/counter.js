export default (state = {number: 0}, action) => {
  if (action.type === 'INCREASE') {
    return {number: state.number + action.amount};
  } else if (action.type === 'DECREASE') {
    return {number: state.number - action.amount};
  }

  return state;
};
