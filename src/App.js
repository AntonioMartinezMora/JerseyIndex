import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './Style/App.css'; import './Style/App.css'; 
// Import Components
import Navigation from './Components/Navigation';
// Import Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Terms from './Pages/Terms'
import Team from './Pages/Team';
import Error from './Pages/Error';
import Jersey from './Pages/Jersey';
import AllStar from './Pages/AllStar'
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
        <Route path="/all-star">
          <AllStar/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/terms">
          <Terms/>
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
