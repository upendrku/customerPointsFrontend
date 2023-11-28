import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Purchases from './components/Purchases';
import Points from './components/Points';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/"><a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Points</a></Link>{' '}
          <Link to="/purchases"><a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Purchases</a></Link>{' '} 
          <Switch>
            <Route exact path="/" component={Points} />
            <Route exact path="/purchases" component={Purchases} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
