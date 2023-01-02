import React, { FC } from 'react';
import './App.scss';
import Button from '../components/Button/Button';

const App:FC = () => {
  return (
    <div className="App">
        <Button text="Open Modal" />
    </div>
  );
}

export default App;
