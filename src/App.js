import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyric from './components/tracks/Lyric';

class App extends Component {
  
  render(){
    
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <br/>
          <div className="container">
            <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/lyric/track/:id' component={Lyric} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;