import React from 'react';
import './App.scss';
import { Dashboard, Login } from './Pages/Index';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './authentication/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<PrivateRoute/>}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
