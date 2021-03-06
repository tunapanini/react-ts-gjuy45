import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function App() {
  const name = 'React';

  return (
    <div>
      <Hello name={name} />
      <p>
        Start editing to see some magic happen :)
      </p>
    </div>
  );
}

render(<App />, document.getElementById('root'));
