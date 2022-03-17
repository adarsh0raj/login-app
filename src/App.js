import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import ProfileDetails from './components/profiles/ProfileDetails';

class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/login" element={<SignIn />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
  
            <Route exact path="/profile/:id" render={(props) => (
                <ProfileDetails id={props.match.params.id}/>
            )} />
  
          </Routes>
        </div>
        </Router>
      );
  } 
};


export default App;
