import React from 'react';
import './index.css';
import Landing from "./containers/Landing";
function App() {
  return (
    <div className="App">
      <Landing/>
      <div className="container">
          <button className="bg-blue-500 text-white font-bold py-2 px-4  rounded">
              Hi
          </button>
      </div>
    </div>
  );
}

export default App;
