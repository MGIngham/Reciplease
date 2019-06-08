import React from 'react';
import './App.css';
import Header from './components/Header';
import GetRecipe from './components/Get-recipe';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
      <GetRecipe />
      </div>
    </div>
  );
}

export default App;
