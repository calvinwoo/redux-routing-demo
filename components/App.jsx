import React from 'react';
import {Link} from 'react-router';

const App = ({children}) => {
  return (
    <div style={{padding: '20px 20px'}}>
      <header style={{marginBottom: 30}}>
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

