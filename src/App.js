import React from 'react';
import './App.css';
// import Dashboard from './components/dashboard/Dashboard';
// import Wizard from './components/wizard/Wizard';
import Header from './components/header/Header'
import routes from './routes';


function App() {
  return (
    <div className="App">
      <Header/>
      {routes}

    </div>
  );
}

export default App;
