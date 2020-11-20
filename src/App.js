import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Footer from './Component/Layout/Footer/Footer';
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
      <Footer />
    </div>
    </BrowserRouter>

  );
}

export default App;
