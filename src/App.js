import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import * as fromContainers from './Containers'
import Logo from './bus.svg'
import './App.scss';

function App() {

  return (
    <Router>
      <header className="app__header">
        <img alt="logo" src={Logo} className="app__logo"/>
        <h1 className="app__title app__title--sm gradient">adventuro</h1>
      </header>
      <div className="app__content">
        <main className="app__main">
          <fromContainers.Form />
        </main>
        <div className="app__hero">
          <Route path="/:route/:direction"><fromContainers.Trip /></Route>
          <h1 className="app__title gradient">*beep beep*</h1>
        </div>
      </div>
    </Router>
  );
}

export default App;
