import React, {useContext} from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// Layouts
import AdminLayoutRoute from './components/AdminLayoutRoute';
import {ThemeProvider} from './ThemeContext';
import AdminLayout from './components/AdminLayout';
import Login from './pages/Login';
import Admin from './components/Admin';
import ThemeEditor from './pages/ThemeEditor';

import {ThemeContext} from './ThemeContext';
import ManageAccount from './pages/ManageAccount';

// import './App.css';

//https://www.c-sharpcorner.com/article/multiple-layout-in-react-with-react-router-v4/ 

function App() {


  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Login} />
            <AdminLayoutRoute path="/admin" component={Admin} />
            <AdminLayoutRoute path="/theme" component={ThemeEditor} />
            <AdminLayoutRoute path="/manage-account" component={ManageAccount} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
