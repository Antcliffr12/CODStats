import React, {useEffect, useState} from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home';
import About from './Pages/About'
import ProfileOverview from './Pages/Warzone/Profile/Overview/Overview';

function App() {
  

  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/warzone/profile/:platform/:username/overview" component={ProfileOverview} />
    </Router>
  );
}

export default App;
