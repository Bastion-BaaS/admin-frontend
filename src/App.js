import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BastionLayout from './components/BastionLayout';
import Collections from './components/Collections';
import Users from './components/Users';
import CloudCode from './components/CloudCode';
import Files from './components/Files';
import LoginHeader from './components/LoginHeader';

function App() {
  return (
    <>
      <LoginHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bastions/:name' element={<BastionLayout />} >
          <Route index path='collections' element={<Collections />} />
          <Route path='users' element={<Users />} />
          <Route path='cloudcode' element={<CloudCode />} />
          <Route path='files' element={<Files />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
