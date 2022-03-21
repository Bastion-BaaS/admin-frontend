import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import CreateBaaS from "./components/CreateBaaS";
import BaasMain from "./components/BaasMain";
import BaasModels from "./components/BaasModels";


function App() {
  return (
    <div className='App h-screen bg-blue-400 flex'>
      <Sidebar />
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bastions/:id/models' element={<BaasModels />} />
          <Route path='/bastions/:id' element={<BaasMain />} />
          <Route path='/create' element={<CreateBaaS />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
