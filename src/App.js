import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './Style/App.css'; import './Style/App.css'; 
// Import Components
import Navigation from './Components/Navigation';
// Import Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Error from './Pages/Error';
import Jersey from './Pages/Jersey';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navigation/>
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
      <Footer />
    </Router>
  );
}

export default App;
