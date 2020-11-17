import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './Component/Layout/Home/Home';
import Navbar from './Component/Layout/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
