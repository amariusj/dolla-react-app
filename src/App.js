//import useState
import React from 'react';

//necessary files
import './App.css';

//import modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//pages and components
import Home from './pages'
import SignInPage from './pages/signin'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInPage} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
