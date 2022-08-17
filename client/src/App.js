import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CountryDetail from './components/CountryDetail/CountryDetail';
import FormActivity from './components/FormActivity/FormActivity';

function App() {
  return (
    <React.Fragment>
      
      <Route exact path={'/'}><LandingPage/></Route>
      <Route path={['/home', '/activities']}><NavBar/></Route>
      {/* otra forma de hacerlo: <Route path={'/home'} render={() => <Home/>}/> */}
      <Route path={'/home'}><Home/></Route>
      <Route path={'/countries/:id'}><CountryDetail/></Route>
      <Route path={'/activities'}><FormActivity/></Route>
      
    </React.Fragment>
  );
}

export default App;
