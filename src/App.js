import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//pages
import Login from './pages/Login';
import DirectoryPages from './pages/DirectoryPages';
import About from './pages/About';
import NotFound from './components/NotFound'
//componentes
import NavBar from './components/NavBar'




const App = ()=> {
  return (
    <Router>
      <div className="container">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/directory/" component={DirectoryPages}/>
          <Route path="/about/" component={About}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
