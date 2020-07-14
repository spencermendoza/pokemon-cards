import React, { useContext, useState } from 'react';
import { PokeContext } from './PokeContext';
import './App.css';

function App() {

  const { onClickTesting } = useContext(PokeContext);

  return (
    <div onClick={onClickTesting}>
      <p>This is working...?</p>
    </div>
  );
}

export default App;
