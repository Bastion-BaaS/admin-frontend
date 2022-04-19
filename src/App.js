import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Home/Login';
import Home from './components/Home/Home';
import BastionLayout from './components/Instances/BastionLayout';
import Collections from './components/Collections/Collections';
import Users from './components/Users/Users';
import CloudCode from './components/CloudCode/CloudCode';
import Files from './components/Files/Files';

function App() {
  const admin = useSelector(state => state.admin);

  if (!admin) {
    return (
      <Login />
    );
  }

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bastions/:name' element={<BastionLayout />} >
        <Route index path='collections' element={<Collections />} />
        <Route path='users' element={<Users />} />
        <Route path='cloudcode' element={<CloudCode />} />
        <Route path='files' element={<Files />} />
      </Route>
    </Routes>
  );
};

export default App;