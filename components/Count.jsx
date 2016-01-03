import React from 'react';
import {Link} from 'react-router';

export default ({number, increase, decrease, children}) => {
  return (
    <div>
      <h4>Count</h4>

      <div style={{fontSize: 30}}>
        {number}
      </div>

      <div>
        <button onClick={() => increase(1)}>
          Increase
        </button>
        <button onClick={() => decrease(1)}>
          Decrease
        </button>
      </div>

      <div>
        <Link to='/count/box?source=count'>Show Box</Link>
      </div>

      {children}
    </div>
  );
};
