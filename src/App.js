import { Route, Routes } from 'react-router-dom';
import './App.css';
import Custom from './components/Custom';

import MainHome from './components/MainHome';
import SingleProfile from './components/SingleProfile';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainHome />}/>
      <Route exact path="/profile" element={<SingleProfile />}/>
      <Route exact path="/custom/:tag" element={<Custom />}/>
    </Routes>
    
  );
}

export default App;
