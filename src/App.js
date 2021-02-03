import React from 'react';
import './App.css';

import ToyHeader from './ToyHeader'
import SearchBar from './SearchBar'
import ToysContainer, { sayHi } from './ToysContainer'

function App() {
  return (
    <div className="App">
      <ToyHeader />
      <SearchBar />
      <ToysContainer />
    </div>
  );
}

export default App;

//A component is a collection of elements that represent a unity in a goal or task
//As we nest our components, their specifity increases
