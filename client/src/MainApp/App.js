import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Components
import Menu from "../Common/Menu";
import Footer from "../Common/Footer";

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
                <div>
                    <Switch>
                        <Route exact path='/' component={BienvenuePage}/>
                        <Route exact path='/projects' component={ProjectsPage}/>
                        <Route exact path='*' component={NotFoundPage} />
                    </Switch>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
