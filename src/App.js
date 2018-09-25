import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import FlotChart from './pages/FlotChart';
import MorrisChart from './pages/MorrisChart';
import Tables from './pages/Tables';
import Forms from './pages/Forms';
import PanelWeels from './pages/PanelWeels';
import Buttons from './pages/Buttons';
import Notifications from './pages/Notifications';
import Typography from './pages/Typography';
import Icons from './pages/Icons';
import Grid from './pages/Grid';
import Blank from './pages/Blank';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Nav />
        <main role="main">
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/flot-chart' component={FlotChart} />
          <Route path='/morris-chart' component={MorrisChart} />
          <Route path='/tables' component={Tables} />
          <Route path='/forms' component={Forms} />
          <Route path='/panel-weels' component={PanelWeels} />
          <Route path='/buttons' component={Buttons} />
          <Route path='/notifications' component={Notifications} />
          <Route path='/typography' component={Typography} />
          <Route path='/icons' component={Icons} />
          <Route path='/grid' component={Grid} />
          <Route path='/blank' component={Blank} />
          <Route path='/login' component={Login} />
          
          {/* default route */}
          <Route exact path='/' component={Dashboard} />
        </main>
      </div>
    );
  }
}

export default App;
