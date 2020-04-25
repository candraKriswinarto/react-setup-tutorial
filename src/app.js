import React from 'react';
import reactDOM from 'react-dom';
import './styles/style.scss';

const App = () => {
  return (
    <h1>Hello from react</h1>
  )
}

reactDOM.render(<App />, document.getElementById('root'))