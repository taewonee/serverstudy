import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import Home from './Home';
import Survey_1 from './pages/Survey_1';
import Survey_2 from './pages/Survey_2';
import Survey_3 from './pages/Survey_3';
import Survey_4 from './pages/Survey_4';
import Survey_5 from './pages/Survey_5';
import Result from './pages/Result';



function App() {
  return (
    <Router>
      <div>
        <Route exact path ="/" component={Home} />
        <Switch>
          <Route path ="/Survey_1" component={Survey_1} />
          <Route path ="/Survey_2" component={Survey_2} />
          <Route path ="/Survey_3" component={Survey_3} />
          <Route path ="/Survey_4" component={Survey_4} />
          <Route path ="/Survey_5" component={Survey_5} />
          <Route path ="/Result" component={Result} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
