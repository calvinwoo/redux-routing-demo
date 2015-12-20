import React from 'react';
import {Link} from 'react-router';

export default ({location}) => {
  return (
    <div style={{border: '3px black solid'}}>
      <h1>
        <Link to={location.query.source}>X to Close</Link>
      </h1>
    </div>
  );
};
