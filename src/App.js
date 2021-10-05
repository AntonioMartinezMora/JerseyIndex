import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// Import Components
import Navbar from './Components/Navbar';
// Import Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Error from './Pages/Error';
import Jersey from './Pages/Jersey';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/teams/:team">
          <Team/>
        </Route>
        <Route path="/jerseys/:id">
          <Jersey/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
