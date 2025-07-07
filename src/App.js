import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; 
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import EditProfile from './components/EditProfile';

function App() {
return (
<Router> 
  <Routes>
    <Route path= "/" element={<Login/>}/>
    <Route path= "/dashboard" element={<Dashboard/>}/>
   <Route path= "/register" element={<Register/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route path="/reset-password/:token" element={<ResetPassword/>}/>
    <Route path="/edit-profile" element={<EditProfile/>}/>
  </Routes>
</Router>
);
}

export default App;
