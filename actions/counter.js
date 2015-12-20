export default {
  increase(n) {
    return {
      type: 'INCREASE',
      amount: n
    };
  },

  decrease(n) {
    return {
      type: 'DECREASE',
      amount: n
    };
  }
};
