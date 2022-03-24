import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BastionLayout from './components/BastionLayout';
import BastionHome from './components/BastionHome';
import Collections from './components/Collections';
import Users from './components/Users';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bastions/:name' element={<BastionLayout />} >
        <Route index element={<BastionHome />} />
        <Route path='collections' element={<Collections />} />
        <Route path='users' element={<Users />} />
        {/* <Route path='functions' element={<BaasMain />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
