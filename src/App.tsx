import React from 'react';
import './App.css';
import CustomAppBar from './components/customAppBar/CustomAppBar';
import Routes from './config/router/Routes';

function App() {
  return (
    <div className="App">
      <CustomAppBar />
      <Routes />
    </div>
  );
}

export default App;
