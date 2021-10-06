import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import Dashboard from './Components/dashboard/Dashboard';
import NavBar from './Components/layout/NavBar';
import CreateProject from './Components/projects/CreateProject';
import ProjectDetails from './Components/projects/ProjectDetails';


class App extends Component {
  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/project/:id" component={ProjectDetails}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/create" component={CreateProject}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
