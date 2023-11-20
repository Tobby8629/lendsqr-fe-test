import React, { useState } from 'react';
import './App.scss';
import { Dashboard, Login } from './Pages/Index';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './authentication/ProtectedRoute';
import { Navbar, Sidebar } from './components/Main';
import Details from './Pages/UserDetail/Details';


function App() {
  const [open, setopen] = useState(false)
  return (
    <div className="App">
      <Navbar />
      <Sidebar open = {open} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<PrivateRoute/>}>
          <Route path="/" element={<Dashboard setopen={setopen} open={open}/>} />
          <Route path="/details" element={<Details setopen={setopen} open={open} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
