import React from 'react';

const Base = ({markup, initialData}) => {
  const renderInitialData = () => {
    const innerHtml = `window.__initialData__ = ${JSON.stringify(initialData)}`;
    return (
      <script dangerouslySetInnerHTML={{__html: innerHtml}} />
    );
  };

  const renderReactApp = () => {
    return (
      <div
        id='react-content'
        dangerouslySetInnerHTML={{__html: markup}}
      />
    );
  };

  return (
    <html>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />

        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' />
      </head>

      <body>
        {renderInitialData()}
        {renderReactApp()}
        <script src='/public/bundle/app.bundle.js'></script>
      </body>
    </html>
  );
};

export default Base;
