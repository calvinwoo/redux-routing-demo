import React from 'react';
import {Link} from 'react-router';

export default ({number, increase, decrease, children}) => {
  return (
    <div>
      Some state changes:
      {number}
      <button onClick={() => increase(1)}>
        Increase
      </button>
      <button onClick={() => decrease(1)}>
        Decrease
      </button>

      <div>
        <Link to='foo/box?source=foo'>Show Box</Link>
      </div>

      {children}
    </div>
  );
};
