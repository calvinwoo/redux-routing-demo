export default (state = {number: 0}, action) => {
  if (action.type === 'INCREASE') {
    return {number: state.number + Number(action.amount)};
  } else if (action.type === 'DECREASE') {
    return {number: state.number - Number(action.amount)};
  }

  return state;
};
