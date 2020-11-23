import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Footer from './Component/Layout/Footer/Footer';
import Home from './Component/Layout/Home/Home';
import Navbar from './Component/Layout/Navbar/Navbar';
import Order from './Component/Order/Order';

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/order' component={Order} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>

  );
}

export default App;
