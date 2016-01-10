import React from 'react';
import {Link} from 'react-router';

const App = ({children}) => {
  return (
    <div className='container'>
      <header style={{marginBottom: 30}}>
        <h3>redux-routing-demo</h3>
        <p>
          <a href='https://github.com/calvinwoo/redux-routing-demo'>
            https://github.com/calvinwoo/redux-routing-demo
          </a>
        </p>
        <h4>Table of Contents</h4>
        <ul className='list-inline'>
          <li><Link to='/count'>Count</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </header>

      <div>
        {children}
      </div>
    </div>
  );
};

export default App;
