import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Components
import Menu from "../Common/Menu";

// Pages
import BienvenuePage from "../Bienvenue/BienvenuePage";
import ProjectsPage from "../Projects/ProjectsPage";
import NotFoundPage from "../Errors/NotFoundPage";

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Menu/>
            <Switch>
              <Route exact path='/' component={BienvenuePage}/>
              <Route exact='/projects' component={ProjectsPage}/>
              <Route path='*' exact={true} component={NotFoundPage} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
