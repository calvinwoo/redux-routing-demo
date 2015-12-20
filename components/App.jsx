import React from 'react';
import {Link} from 'react-router';

const App = ({children}) => {
  return (
    <div>
      App
      <header>
        Links:
        <Link to='/foo'>Foo</Link>
        <Link to='/bar'>Bar</Link>
      </header>

      <div>
        Content
        {children}
      </div>
    </div>
  );
};

export default App;

