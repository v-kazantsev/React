import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './components/Navbar.css';
import './components/Form.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Radio from './components/Radio';
import Drop from './components/Drop';
import Checkboxes from './components/Checkboxes';
import Form from './components/Form';
import './Prism.css';
import 'prismjs';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav className="Navbar">
              <Navbar />
            </nav>
          </header>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/forms" component={ Form } />
            <Route path="/radiobuttons" component={ Radio } />
            <Route path="/dropdowns" component={ Drop } />
            <Route path="/checkboxes" component={ Checkboxes } />
          </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
