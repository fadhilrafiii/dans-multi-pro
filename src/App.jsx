import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Jobs from './components/Jobs'

function App() {
  return (
    
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/jobs" component={Jobs} />
          </Switch>
        </div>
      </Router>
   
  );
}

export default App;
